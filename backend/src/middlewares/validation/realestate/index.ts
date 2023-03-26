import { body } from "express-validator";
import { IGeolocation } from "../../../shared-type/geocode";

// real estate validation
export const realEstateCreateValidation = () => {
	return [
		body("isSale")
			.isBoolean()
			.withMessage("real estate must be for sale or rent"),
		body("name")
			.isString()
			.withMessage("real estate name's name is required")
			.isLength({ min: 10, max: 20 })
			.withMessage(
				"real-estate's name must have at least 10 caracters and at maximum 20"
			),
		body("beds")
			.isNumeric()
			.withMessage("the real estate beds field must be a number")
			.isInt()
			.withMessage("the real estate beds field must be a interge number")
			.custom((value: number) => {
				if (value <= 0)
					throw new Error(
						"the real estate beds field cannot be less than 1"
					);

				if (value > 50)
					throw new Error(
						"the real estate beds field cannot be greater than 50"
					);

				return true;
			}),
		body("bathrooms")
			.isNumeric()
			.withMessage("the real estate bathrooms field must be a number")
			.isInt()
			.withMessage(
				"the real estate bathrooms field must be a interge number"
			)
			.custom((value: number) => {
				if (value <= 0)
					throw new Error(
						"the real estate bathrooms field cannot be less than 1"
					);

				if (value > 50)
					throw new Error(
						"the real estate bathrooms field cannot be greater than 50"
					);

				return true;
			}),
		body("parking")
			.isBoolean()
			.withMessage(
				"real estate parking field  must be fill with a boolean value"
			),
		body("furnished")
			.isBoolean()
			.withMessage(
				"real estate furnished field must be fill with a boolean value"
			),
		body("address")
			.isString()
			.withMessage("real estate address field is required")
			.isLength({ min: 10, max: 20 })
			.withMessage(
				"user's name must have at least 10 caracters and at maximum 20"
			),
		body("price")
			.isNumeric()
			.withMessage("the real estate price field must be a number")
			.custom((value: number, { req }) => {
				if (value <= 0)
					throw new Error(
						"the real estate price field cannot be less than 1"
					);

				if (req.body.offer && req.body.discount >= value)
					throw new Error(
						"the real estate price cannot be less than the discount"
					);
				return true;
			}),
		body("offer")
			.isBoolean()
			.withMessage(
				"real estate offer field must be fill with a boolean value"
			)
			.custom((value, { req }) => {
				if (value === true && !req.body.discount)
					throw new Error(`you must fill a discount`);

				if (value === true && req.body.discount > req.body.price)
					throw new Error("discount cannot be higher than the price");

				return true;
			}),
		body("geolocation").custom((value: string) => {
			const obj: IGeolocation = JSON.parse(value);
			if (!obj.lat) throw new Error("you must inform a latitude");

			if (!obj.lng) throw new Error("you must inform a longitude");

			return true;
		}),
	];
};
