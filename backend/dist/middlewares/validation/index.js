"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// module
const express_validator_1 = require("express-validator");
// middleware
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    // hasn't errors? then move on
    if (errors.isEmpty())
        return next();
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push(err.msg));
    return res.status(422).json({
        errors: extractedErrors
    });
};
exports.default = validate;
