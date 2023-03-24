// module
import { validationResult } from "express-validator";

// types
import { NextFunction, Request, Response } from "express";

// middleware
const validate = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);
	const errors = validationResult(req);
	// hasn't errors? then move on
	if (errors.isEmpty()) return next();

	const extractedErrors: string[] = [];

	errors.array().map((err) => extractedErrors.push(err.msg));

	return res.status(422).json({
		message: extractedErrors[0],
	});
};

export default validate;
