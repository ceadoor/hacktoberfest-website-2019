const validator = require('express-validator');
const { validationResult } = require('express-validator');

/* Sample Validation example */
exports.signUpValidationCriterias = [
    validator
        .body('email')
        .exists()
        .withMessage('You must provide a valid email address.')
        .isEmail()
        .withMessage('Email address you entered is not valid.')
        .trim()
        .normalizeEmail(),
    validator
        .body('name')
        .exists()
        .withMessage('You must provide your name.'),
];

exports.signUpValidationBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsObj = errors.mapped();
        const emailError = errorsObj.email && errorsObj.email.msg;
        const nameError = errorsObj.name && errorsObj.name.msg;
        return res.status(400).json({
            error: {
                msg: emailError || nameError,
                _reported: new Date().getTime(),
            },
        });
    }
    return next();
};
