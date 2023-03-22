import { body } from "express-validator";

// Geocode validation
export const geocodeGetLocation = () => {
	return [
		body("address")
			.isString()
			.withMessage("address is required")
			.isLength({ min: 3 })
			.withMessage("address must have at least 3 caracters"),
	];
};
