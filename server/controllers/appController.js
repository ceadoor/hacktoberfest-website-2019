/* eslint-disable camelcase */
const _ = require('lodash');
const moment = require('moment');

exports.getIndex = (req, res) => {
    res.json({ status: '200' });
};

const buildSearchQuery = (username, searchYear) => {
    return `-label:invalid+created:${searchYear}-09-30T00:00:00-12:00..${searchYear}-10-31T23:59:59-12:00+type:pr+is:public+author:${username}`;
};

/**
 *  Fetch Pull Requests
 */
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

/**
 *  Parse raw data
 */
exports.parsePRs = ({ list }) => {
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
            user: {
                login: user.login,
                url: user.html_url,
            },
            url: html_url,
            open: state === 'open',
            hasHacktoberfestLabel,
            createdAt: moment(created_at).format('MMMM Do YYYY'),
            isPending: moment(created_at).isAfter(weekOld),
        };
    });
};

/**
 *  Returns array of status flag
 *  eg: [true, false]
 */
exports.checkMergeStatus = async ({ list, octokit }) => {
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

exports.fetchPRsData = async ({ username, octokit }) => {
    /**
     *  Fetch PRs
     */
    const { list = [] } = await loadPRs({ username, octokit });
    /**
     *  Parse PRs
     */
    const parsedPRsList = await this.parsePRs({ list });
    /**
     *  Fetch Merge Status
     */
    const mergedStatusList = await this.checkMergeStatus({ list: parsedPRsList, octokit });
    /**
     *  Add `merged` status to each item
     */
    const PRs = _.zipWith(parsedPRsList, mergedStatusList, (pr, merged) => {
        return _.assign(pr, { merged });
    });

    return {
        data: PRs,
        fetchedAt: new Date().toJSON(),
    };
};
