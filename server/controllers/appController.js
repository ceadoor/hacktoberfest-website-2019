/* eslint-disable camelcase */
const _ = require('lodash');
const moment = require('moment');
const { promisify } = require('util');
const generate = require('nanoid/generate');
const GoogleSpreadsheet = require('google-spreadsheet');

exports.getIndex = (req, res) => {
    res.json({ status: '200' });
};

const buildSearchQuery = (username, searchYear) => {
    return `-label:invalid+created:${searchYear}-09-30T00:00:00-12:00..${searchYear}-10-31T23:59:59-12:00+type:pr+is:public+author:${username}`;
};

const loadPRs = async ({ username, octokit }) => {
    /**
     *  Get correct-year
     */
    const today = new Date();
    const currentYear = today.getFullYear();
    const searchYear = today.getMonth() < 9 ? currentYear - 1 : currentYear;

    let list = [];
    let userExists = true;

    try {
        list = await octokit.search.issuesAndPullRequests({
            q: buildSearchQuery(username, searchYear),
            per_page: 100,
        });
    } catch (err) {
        // Handle NoSuchUser error
        userExists = false;
    }

    if (userExists) {
        /**
         *  Paginate through all the pages
         */
        list = await octokit.paginate(list);
    }

    return { list };
};

const parsePRs = ({ list }) => {
    return _.map(list, item => {
        const { pull_request, labels, number, state, title, html_url, user, created_at } = item;

        // Extract repo name
        const repo = pull_request.html_url.substring(0, pull_request.html_url.search('/pull/'));

        const hasHacktoberfestLabel = _.some(labels, label => {
            return label.name.toLowerCase() === 'hacktoberfest';
        });

        // The 7 day time offered by DigitalOcean
        const weekOld = moment()
            .subtract(7, 'days')
            .startOf('day');

        return {
            title,
            number,
            repoName: repo.replace('https://github.com/', ''),
            url: html_url,
            user: {
                login: user.login,
                url: user.html_url,
            },
            createdAt: moment(created_at).format('MMMM Do YYYY'),
            hasHacktoberfestLabel,
            isOpen: state === 'open',
            isPending: moment(created_at).isAfter(weekOld),
        };
    });
};

/**
 *  Returns array of status flag
 *  eg: [true, false]
 */
const checkMergeStatus = async ({ list, octokit }) => {
    const result = await Promise.all(
        _.map(list, async pr => {
            const { repoName, number } = pr;
            // outputs an array
            const repoDetails = repoName.split('/');

            try {
                const { headers } = await octokit.pulls.checkIfMerged({
                    owner: repoDetails[0],
                    repo: repoDetails[1],
                    pull_number: number,
                });
                // status if merged
                return headers.status === '204 No Content';
            } catch (err) {
                // status if not merged
                if (err.status === 404) {
                    return false;
                }
            }
        })
    );
    return result;
};

/**
 *  Fetch User Pull Requests Status
 */

exports.getUserPRs = async ({ username, octokit }) => {
    const { list = [] } = await loadPRs({ username, octokit });
    const parsedPRsList = await parsePRs({ list });
    const mergedStatusList = await checkMergeStatus({ list: parsedPRsList, octokit });
    /**
     *  Add `isMerged` status to each item
     */
    const PRs = _.zipWith(parsedPRsList, mergedStatusList, (pr, isMerged) => {
        return _.assign(pr, { isMerged });
    });

    return {
        data: PRs,
        fetchedAt: new Date().toJSON(),
    };
};

const loadRepos = async ({ page, perPage, octokit }) => {
    let list = [];
    try {
        list = await octokit.search.issuesAndPullRequests({
            q: 'label:hacktoberfest+state:open',
            page,
            per_page: perPage,
        });
        // eslint-disable-next-line no-empty
    } catch (err) {}
    return list;
};

const parseRepos = ({ list, octokit }) => {
    const listData = _.map(list, async item => {
        const repo = item.repository_url.split('/');
        const repoName = repo[repo.length - 1];
        const owner = repo[repo.length - 2];
        const { number, state, title, html_url, user, created_at } = item;
        const info = await octokit.repos.get({ owner, repo: repoName });
        return {
            issueTitle: title,
            isOpen: state === 'open',
            number,
            repoName,
            description: info.data.description,
            language: info.data.language,
            user: {
                login: user.login,
                url: user.html_url,
            },
            url: html_url,
            createdAt: moment(created_at).format('MMMM Do YYYY'),
        };
    });
    return Promise.all(listData);
};

/**
 *  Fetch Hacktoberfest Labelled Repos
 */

exports.getHacktoberfestRepos = async ({ page, perPage, octokit }) => {
    const {
        data: { items = [] },
    } = await loadRepos({ page, perPage, octokit });
    const parsedRepoList = await parseRepos({ list: items, octokit });
    return {
        data: parsedRepoList,
        fetchedAt: new Date().toJSON(),
    };
};

exports.getUserDetails = async ({ username, octokit }) => {
    let userExists = true;
    let avatar_url;
    try {
        ({
            data: { avatar_url },
        } = await octokit.users.getByUsername({
            username,
        }));
    } catch (err) {
        // status if not merged
        if (err.status === 404) {
            userExists = false;
        }
    }
    if (userExists) {
        return {
            user: {
                userImage: avatar_url,
                username,
            },
            userExists,
        };
    }
    return {
        error: "Couldn't find any data or we hit an error, try again ?",
        userExists,
    };
};

/**
 *  Google SpreadSheets API Call
 */

/**
 *  For Production Only
 */
function credsFromEnvironment() {
    return {
        private_key: process.env.G_PKEY.replace(/\\n/g, '\n'),
        client_email: process.env.G_C_EMAIL,
    };
}

let creds;
try {
    // eslint-disable-next-line global-require
    creds = require('../gservice.json');
} catch {
    creds = credsFromEnvironment();
}

/**
 *  Retrieve Registration Data
 */
exports.getGSheetRawContents = async () => {
    const doc = new GoogleSpreadsheet(process.env.GSHEETS_ID);
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];

    const rows = await promisify(sheet.getRows)({
        offset: 1,
    });

    return { content: rows };
};

/**
 *  Get Individual Record
 */

const getRegistrationRecord = async ({ email, content }) => {
    return content.filter(val => {
        return val.email === email;
    })[0];
};

exports.regCandidateToEvent = async ({ name, email, department, contactNumber, year }) => {
    const doc = new GoogleSpreadsheet(process.env.GSHEETS_ID);
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];

    // Check if email already exists in sheet
    const { content } = await this.getGSheetRawContents();

    const user = await getRegistrationRecord({ email, content });
    if (user) {
        return { status: false, message: 'This user has already registered' };
    }

    // Add registration limit
    const userLimit = parseInt(process.env.REG_LIMIT, 10);
    if (content.length >= userLimit) {
        return { status: false, message: 'The Registration is full!' };
    }

    const randomID = generate('1245689ABEFKLPRTVXZ', 8);

    const newCandidate = {
        name,
        email,
        department,
        year,
        contactNumber,
        uuid: `${randomID.slice(0, 4)}-${randomID.slice(4, 8)}`,
    };

    try {
        await promisify(sheet.addRow)(newCandidate);
    } catch (err) {
        return { status: false, message: 'Either the registration is closed or something happened!' };
    }
    return { status: true, message: 'Registration successful' };
};
