// types
import {
	RealEstateCreateResponse,
	RealEstateGetResponse,
	RealEstateModel,
} from "../../../shared-types/realestate";
import { ServerResponse } from "../../../shared-types/server-response";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class RealEstateService {
	// create a realestate related to an user
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

	// update a real estate related to an user
	static async update(
		id: string | string[],
		formData: FormData,
		token: string
	) {
		console.log(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates/${id}`
		);
		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates/${id}`,
			{
				method: "PUT",
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
			`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}/real-estates`,
			fetchOptions
		);
	}

	// delete a realestate related to an user
	static async delete(
		id: string,
		token: string
	): Promise<ServerResponse<RealEstateModel>> {
		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates/${id}`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}

	// get a real estate by an id
	static async getById(
		id: string,
		options: RequestInit
	): Promise<RealEstateGetResponse<RealEstateModel>> {
		const fetchOptions: ResponseInit = options
			? {
					method: "GET",
					...options,
			  }
			: {
					method: "GET",
			  };

		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/real-estates/${id}`,
			fetchOptions
		);
	}
}
