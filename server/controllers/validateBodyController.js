const validator = require('express-validator');
const { validationResult } = require('express-validator');

exports.fetchPRsCriterias = [
    validator
        .body('username')
        .exists()
        .withMessage('You must provide your username.'),
];

exports.fetchPRsBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsObj = errors.mapped();
        const usernameError = errorsObj.username && errorsObj.username.msg;
        return res.status(400).json({
            error: {
                msg: usernameError,
                _reported: new Date().getTime(),
            },
        });
    }
    return next();
};

exports.fetchReposCriterias = [
    validator
        .body('page')
        .exists()
        .withMessage('You must provide a page number'),
    validator
        .body('perPage')
        .exists()
        .withMessage('You must provide per page number.'),
];

exports.fetchReposBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsObj = errors.mapped();
        const pageError = errorsObj.page && errorsObj.page.msg;
        const perPageError = errorsObj.perPage && errorsObj.perPage.msg;
        return res.status(400).json({
            error: {
                msg: pageError || perPageError,
                _reported: new Date().getTime(),
            },
        });
    }
    return next();
};
