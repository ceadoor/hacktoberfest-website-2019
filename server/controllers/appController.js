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

exports.fetchPRsData = async ({ octokit, username }) => {
    const { list = [] } = await loadPRs({ octokit, username });

    return {
        data: list,
    };
};
