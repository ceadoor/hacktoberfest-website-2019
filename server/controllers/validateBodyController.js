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

exports.registerCandidateCriterias = [
    validator
        .body('name')
        .exists()
        .withMessage('You must provide your name.')
        .isLength({ max: 64 })
        .withMessage('Name must be 64 characters or less.'),
    validator
        .body('email')
        .exists()
        .withMessage('You must provide a valid email address.')
        .isLength({ max: 254 })
        .withMessage('Email must be 254 characters or less.')
        .isEmail()
        .withMessage('Email address you entered is not valid.')
        .trim()
        .normalizeEmail(),
    validator
        .body('department')
        .exists()
        .withMessage('Department is missing'),
    validator
        .body('year')
        .exists()
        .withMessage('Class Year not specified.')
        .matches(/^[0-9]+$/)
        .withMessage('Class Year must be a number.')
        .isLength({ min: 1, max: 1 })
        .withMessage('Class Year must be either 1, 2, 3 or 4'),
    validator
        .body('contactNumber')
        .exists()
        .withMessage('Contact Number not specified.')
        .matches(/^[0-9]+$/)
        .withMessage('Contact Number must not have special characters')
        .isLength({ min: 10 })
        .withMessage('Contact Number must be minimum 10 characters'),
];

exports.registerCandidateBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsObj = errors.mapped();
        const nameError = errorsObj.name && errorsObj.name.msg;
        const emailError = errorsObj.email && errorsObj.email.msg;
        const departmentError = errorsObj.department && errorsObj.department.msg;
        const yearError = errorsObj.year && errorsObj.year.msg;
        const contactNumberError = errorsObj.contactNumber && errorsObj.contactNumber.msg;
        return res.status(400).json({
            error: {
                msg: nameError || emailError || departmentError || yearError || contactNumberError,
                _reported: new Date().getTime(),
            },
        });
    }
    return next();
};

exports.getStudentDetailsCriterias = [
    validator
        .body('uuid')
        .exists()
        .withMessage('You must provide your uuid.'),
];

exports.getStudentDetailsBody = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsObj = errors.mapped();
        const uuidError = errorsObj.uuid && errorsObj.uuid.msg;
        return res.status(400).json({
            error: {
                msg: uuidError,
                _reported: new Date().getTime(),
            },
        });
    }
    return next();
};
