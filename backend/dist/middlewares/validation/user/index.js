"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateValidation = void 0;
const express_validator_1 = require("express-validator");
// Users validation
const userCreateValidation = () => {
    return [
        (0, express_validator_1.body)("name")
            .isString().withMessage("user's name is required")
            .isLength({ min: 3 }).withMessage("user's name must have at least 3 caracters"),
        (0, express_validator_1.body)("email")
            .isString().withMessage("user's email is required")
            .isEmail().withMessage("user's email must be a valid email"),
        (0, express_validator_1.body)("password")
            .isString().withMessage("user's password is required")
            .isLength({ min: 5 }).withMessage("user's password must have at least 5 caracters"),
        (0, express_validator_1.body)("confirmPassword")
            .isString().withMessage("user's password must be confirmed")
            .custom((value, { req }) => {
            if (value !== req.body.password)
                throw new Error("the confirm password is not equal to the password");
            return true;
        })
    ];
};
exports.userCreateValidation = userCreateValidation;
