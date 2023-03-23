import { RealEstateCreateResponse } from "../../../shared-types/realestate";
import CreateFetch from "../../../utils/createFetch";

export default class RealEstateService {
	static async create(formData, token): Promise<RealEstateCreateResponse> {
		return await CreateFetch.dispatch<RealEstateCreateResponse>(``, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: null,
		});
	}
}
