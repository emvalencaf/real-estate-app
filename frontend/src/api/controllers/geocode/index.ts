// services
import GeocodeService from "../../services/geocode";

// types
import { GeocodeGetLocationFnResponse } from "../../../shared-types/geocode";

export default class GeocodeController {
	static async getGeoLocation(
		address: string,
		token: string
	): Promise<GeocodeGetLocationFnResponse> {
		try {
			if (!address) throw new Error("address cannot be an empety string");
			return await GeocodeService.getGeoLocation(address, token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
}
