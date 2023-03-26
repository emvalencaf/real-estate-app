// types
import {
	FormDataRealEstateProps,
	RealEstateCreateResponse,
	RealEstateGetResponse,
	RealEstateModel,
} from "../../../shared-types/realestate";

// utils
import CreateFetch from "../../../utils/createFetch";

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

	// get all realestate realted to an user id
	static async getAllFromUser(
		userId: string,
		options: RequestInit
	): Promise<RealEstateGetResponse<RealEstateModel[]>> {
		const fetchOptions: ResponseInit = options
			? {
					method: "GET",
					...options,
			  }
			: {
					method: "GET",
			  };

		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates/${userId}`,
			fetchOptions
		);
	}
}
