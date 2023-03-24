// types
import {
	FormDataRealEstateProps,
	RealEstateCreateResponse,
} from "../../../shared-types/realestate";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class RealEstateService {
	static async create(
		formData: FormDataRealEstateProps,
		token: string
	): Promise<RealEstateCreateResponse> {
		return await CreateFetch.dispatch<RealEstateCreateResponse>(
			`${process.env.NEXT_PUBLIC_API_URL}/real-estate`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: null,
			}
		);
	}
}
