import { body } from "express-validator";

export const messageCreateValidation = () => {
	return [
		body("sender").isString().withMessage("message must have a sender"),
		body("message").isString().withMessage("message must be a string"),
	];
};
