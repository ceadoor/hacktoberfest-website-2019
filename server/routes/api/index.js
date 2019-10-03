const app = require('../../controllers/appController');

exports.sendStatus = (req, res) => {
    res.json({ status: 'API ok' });
};

/**
 *  Progress of User
 */

exports.fetchUserHacktoberfestPRs = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { username } = req.body;
    const { data, fetchedAt } = await app.getUserPRs({ username, octokit });

    res.status(200).json({ data, fetchedAt });
};

/**
 *  Open repos for contributing
 */

exports.fetchHacktoberfestRepos = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { page, perPage } = req.body;
    const { data, fetchedAt } = await app.getHacktoberfestRepos({ page, perPage, octokit });

    res.status(200).json({ data, fetchedAt });
};
