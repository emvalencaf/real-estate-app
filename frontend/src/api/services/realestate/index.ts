// types
import {
	FormDataRealEstateProps,
	RealEstateCreateResponse,
} from "../../../shared-types/realestate";

// utils
import CreateFetch from "../../../utils/createFetch";
import { createFormData } from "../../../utils/createFormData";

export default class RealEstateService {
	static async create(
		formData: FormData,
		token: string
	): Promise<RealEstateCreateResponse> {
		return await CreateFetch.dispatch<RealEstateCreateResponse>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			}
		);
	}
}
