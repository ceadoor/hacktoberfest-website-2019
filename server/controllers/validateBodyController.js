const validator = require('express-validator');
const { validationResult } = require('express-validator');

exports.fetchPRsValidation = [
    validator
        .body('username')
        .exists()
        .withMessage('You must provide your username.'),
];

exports.fetchPRsValidationBody = (req, res, next) => {
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
