import { IGeocodeGetLocationFnResponse } from "../../shared-type/geocode";
import CreateFetch from "../../utils/createFetch";

export default class GeocodeRepository {
	static async getGeoLocation(
		address: string
	): Promise<IGeocodeGetLocationFnResponse> {
		return await CreateFetch.dispatch<IGeocodeGetLocationFnResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_GEOCODE_API_KEY}`,
			{
				method: "GET",
			}
		);
	}
}
