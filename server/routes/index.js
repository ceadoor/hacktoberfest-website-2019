const express = require('express');

const router = express.Router();
const path = require('path');
const { catchErrors } = require('../handlers/errorHandlers');
const app = require('../controllers/appController');
const validate = require('../controllers/validateBodyController');
const api = require('./api');

router.get('/', app.getIndex);

router.get('/api/v1/', api.sendStatus);

router.post(
    '/api/v1/getPullRequestsData',
    validate.fetchPRsCriterias,
    validate.fetchPRsBody,
    catchErrors(api.fetchUserHacktoberfestPRs)
);

router.post(
    '/api/v1/getHacktoberfestRepos',
    validate.fetchReposCriterias,
    validate.fetchReposBody,
    catchErrors(api.fetchHacktoberfestRepos)
);

router.get('/api/v1/getSheetContents', catchErrors(api.getGSheetContents));

// ToDo: Add fields validation to body
router.post('/api/v1/register', catchErrors(api.registerCandidate));

if (process.env.NODE_ENV === 'production') {
    // Handles any requests that don't match the ones above
    router.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../../client/build/200.html`));
    });
}

module.exports = router;
