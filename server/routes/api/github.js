const Octokit = require('@octokit/rest');

exports.setUpOctokitAPI = () => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
        userAgent: 'Hacktoberfest Status Checker v1.0.0',
        baseUrl: 'https://api.github.com',
    });

    return octokit;
};
