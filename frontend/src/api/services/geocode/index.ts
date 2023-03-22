// tyypes
import { GeocodeGetLocationFnResponse } from "../../../shared-types/geocode";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class GeocodeService {
	static async getGeoLocation(
		address: string,
		token: string
	): Promise<GeocodeGetLocationFnResponse> {
		try {
			return await CreateFetch.dispatch<GeocodeGetLocationFnResponse>(
				`${process.env.NEXT_PUBLIC_API_URL}/api/geocode/location`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						address,
					}),
				}
			);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
}
