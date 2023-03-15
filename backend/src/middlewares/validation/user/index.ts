import { body } from "express-validator";

// Users validation
export const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("user's name is required")
            .isLength({min:3}).withMessage("user's name must has at least 3 caracters"),
        body("email")
            .isString().withMessage("user's email is required")
            .isEmail().withMessage("user's email must be a valid email"),
        body("password")
            .isString().withMessage("user's password is required")
            .isLength({min:5}).withMessage("user's password must has at least 5 caracters"),
        body("confirmPassword")
            .isString().withMessage("user's password must be confirmed")
            .custom((value: string, {req}) => {
                if (value !== req.body.password) throw new Error("the confirm password is not equal to the password");
                return true;
            })
    ];
}