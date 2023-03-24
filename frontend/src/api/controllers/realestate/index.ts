// types
import { FormDataRealEstateProps } from "../../../shared-types/realestate";
import RealEstateService from "../../services/realEstate";
import GeocodeController from "../geocode";

export default class RealEstateController {
	static async create(
		formData: FormDataRealEstateProps,
		geolocationEnabled: boolean,
		token: string
	) {
		const {
			isSale,
			name,
			beds = 0,
			bathrooms = 0,
			parking = false,
			furnished = false,
			address,
			description,
			offer = false,
			price,
			discount,
			images,
		} = formData;

		let { longitude, latitude } = formData;

		// form validation
		if (!name) throw new Error("name field must be fill");

		if (!description) throw new Error("description field must be fill");

		if (!address) throw new Error("address field must be fill");

		if (!price) throw new Error("price field must be field");

		if (offer && !discount) throw new Error("discount field must be field");

		if (offer && discount >= price)
			throw new Error(
				"Discounted price needs to be less than regular price"
			);

		if (bathrooms < 0)
			throw new Error("the number of bathrooms cannot be less than 0");

		if (beds < 0)
			throw new Error("the number of beds cannot be less than 0");

		if (beds > 50)
			throw new Error("the number of beds cannot be higher than 50");

		if (bathrooms > 50)
			throw new Error("the number of bathrooms cannot be higher than 50");

		if (!images || images?.length === 0)
			throw new Error("You must upload at least one image");

		if (images.length > 6)
			throw new Error("You cannot upload more than 6 images");

		if (geolocationEnabled) {
			const response = await GeocodeController.getGeoLocation(
				address,
				token
			);

			if (!response.data)
				throw new Error("You've provided an incorrect address");

			latitude = response.data.lat;
			longitude = response.data.lng;
		}

		if (!geolocationEnabled) {
			if (!latitude) throw new Error("You must inform a latitude");

			if (!longitude) throw new Error("You must inform a longitude");
		}

		const geolocation = {
			lat: latitude,
			lng: longitude,
		};
		try {
			return await RealEstateService.create(formData, token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
}
