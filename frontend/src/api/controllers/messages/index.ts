// service
import MessageService from "../../services/message";

export default class MessageController {
	// send message to landlord
	static async contactLandLord(
		userId: string,
		message: string,
		token: string,
		landLordId: string
	) {
		try {
			if (!landLordId)
				throw new Error("No landlord was attached to this ad");
			if (!message) throw new Error("You must fill a message to send");
			if (!token || !userId)
				throw new Error("You must be logged to send a message");
			return await MessageService.contactLandLord(
				userId,
				message,
				token,
				landLordId
			);
		} catch (err) {
			console.log(err);
			throw new Error(
				"couldn't send message to the landlord try again later"
			);
		}
	}
}
