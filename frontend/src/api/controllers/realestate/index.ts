// controller
import GeocodeController from "../geocode";

// service
import RealEstateService from "../../services/realEstate";

// types
import { FormDataRealEstateProps } from "../../../shared-types/realestate";

export default class RealEstateController {
	// create a realestate related to an user
	static async create(
		data: FormDataRealEstateProps,
		formData: FormData,
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
		} = data;

		let { longitude, latitude } = data;

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

		const geolocation = JSON.stringify({
			lat: latitude,
			lng: longitude,
		});

		formData.set("geolocation", geolocation);
		formData.set("isSale", isSale.toString());
		formData.set("furnished", furnished.toString());
		formData.set("parking", parking.toString());
		formData.set("offer", offer.toString());

		try {
			return await RealEstateService.create(formData, token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}

	// get all realestate realted to an user id
	static async getAllFromUser(userId: string, options: RequestInit = null) {
		return await RealEstateService.getAllFromUser(userId, options);
	}

	// delete a realestate related to an user
	static async delete(id: string, token: string) {
		return await RealEstateService.delete(id, token);
	}
}
