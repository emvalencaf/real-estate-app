// types
import { FormDataRealEstateProps } from "../../../shared-types/realestate";
import RealEstateService from "../../services/realestate";
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
			beds,
			bathrooms,
			parking,
			furnished,
			address,
			description,
			offer,
			price,
			discount,
			images,
		} = formData;

		let { longitude, latitude } = formData;

		// form validation
		if (!name) throw new Error("name field must be fill");

		if (!description) throw new Error("description field must be fill");

		if (discount >= price)
			throw new Error(
				"Discounted price needs to be less than regular price"
			);

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

		const geolocation = {
			lat: latitude,
			lng: longitude,
		};

		return await RealEstateService.create(formData, token);
	}
}
