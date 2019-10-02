const app = require('../../controllers/appController');

exports.sendStatus = (req, res) => {
    res.json({ status: 'API ok' });
};

exports.fetchGitHubData = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { username } = req.body;
    const { data, fetchedAt } = await app.fetchPRsData({ username, octokit });

    res.status(200).json({ data, fetchedAt });
};

exports.fetchGetHacktoberfestRepos = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { data, fetchedAt } = await app.fetchGetHacktoberfestRepos({ octokit });

    res.status(200).json({ data, fetchedAt });
};
