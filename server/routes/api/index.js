const app = require('../../controllers/appController');

exports.sendStatus = (req, res) => {
    res.json({ status: 'API ok' });
};

exports.fetchGitHubData = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { username } = req.body;

    const { data } = await app.fetchPRsData({ octokit, username });

    res.status(200).json({ data });
};
