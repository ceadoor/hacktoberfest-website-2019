const app = require('../../controllers/appController');
// const { accessGSheetsAPI } = require('./routes/api/gsheets');

exports.sendStatus = (req, res) => {
    res.json({ status: 'API ok' });
};

/**
 *  Progress of User
 */
exports.fetchUserHacktoberfestPRs = async (req, res) => {
    const octokit = req.app.get('octokit');
    const { username } = req.body;
    const response = await app.getUserDetails({ username, octokit });
    // fetch PRs only if user exists
    if (response.userExists) {
        const { data, fetchedAt } = await app.getUserPRs({ username, octokit });
        return res.status(200).json({ data, user: response.user, fetchedAt });
    }
    return res.status(403).json({ error: response.error });
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

/**
 *  Get Registration Data
 */
exports.getGSheetContents = async (req, res) => {
    const { content } = await app.getGSheetRawContents();

    res.status(200).json({ data: content });
};

/**
 *  Create registration entry
 */
exports.registerCandidate = async (req, res) => {
    const { name, email, department, contactNumber, year } = req.body;

    const response = await app.regCandidateToEvent({ name, email, department, contactNumber, year });
    const { status, message } = response;
    if (status) {
        return res.status(201).json({ status, message, user: response.user, mailStatus: response.mailStatus });
    }
    return res.status(403).json({ status, message });
};

/**
 *  Get Remaining Registration Seats
 */
exports.getRemainingSeatsNumber = async (req, res) => {
    const response = await app.getRemainingSeatCount();
    const { status, message } = response;
    if (status) {
        return res.status(200).json({ status, message, seatsCount: response.seatsCount });
    }
    return res.status(403).json({ status, message });
};

/**
 *  Get Individual record with uuid
 */
exports.getIndividualRecord = async (req, res) => {
    const { uuid } = req.body;
    const response = await app.getStudentDetails({ uuid });
    const { status, message } = response;
    if (status) {
        return res.status(200).json({ status, message, user: response.user });
    }
    return res.status(403).json({ status, message });
};
