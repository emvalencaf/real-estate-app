// type
import { ServerResponse } from "../../../shared-types/server-response";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class MessageService {
	// contact to the land lord
	static async contactLandLord(
		userId: string,
		message: string,
		token: string,
		landLordId: string
	): Promise<ServerResponse<null>> {
		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/messages/${landLordId}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sender: userId,
					message,
				}),
			}
		);
	}
}
