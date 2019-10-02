/* eslint-disable camelcase */
const _ = require('lodash');
const moment = require('moment');

exports.getIndex = (req, res) => {
    res.json({ status: '200' });
};

const buildSearchQuery = (username, searchYear) => {
    return `-label:invalid+created:${searchYear}-09-30T00:00:00-12:00..${searchYear}-10-31T23:59:59-12:00+type:pr+is:public+author:${username}`;
};

const loadPRs = async ({ octokit, username }) => {
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
            url: html_url,
            open: state === 'open',
            hasHacktoberfestLabel,
            repoName: repo.replace('https://github.com/', ''),
            createdAt: moment(created_at).format('MMMM Do YYYY'),
            isPending: moment(created_at).isAfter(weekOld),
            user: {
                login: user.login,
                url: user.html_url,
            },
        };
    });
};

exports.fetchPRsData = async ({ octokit, username }) => {
    const { list = [] } = await loadPRs({ octokit, username });
    const parsedList = await this.parsePRs({ list });
    /**
     *  TODO
     *  1. For each PR -> check if merged and attach that flag
     */

    return {
        data: parsedList,
    };
};
