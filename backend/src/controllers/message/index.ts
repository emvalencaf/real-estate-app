// controller
import UserController from "../user";

// repository
import MessageRepository from "../../repository/message";

// types
import { Request, Response } from "express";

export default class MessageController {
	// create a message with sender, content and receiver
	static async create(req: Request, res: Response) {
		const { receiverUid } = req.params;
		// get the content of message
		const { sender, message } = req.body;
		try {
			// check if user is authenticated
			if (!req.user)
				return res.status(403).send({
					success: false,
					data: null,
					message: "you must be authenticated to send a message",
				});

			const { user } = req;
			// check if user authenticated is the sender
			if (user.uid !== sender)
				return res.status(403).send({
					success: false,
					data: null,
					message:
						"you cannot send a message using a account of someonelse",
				});

			// check if sender is the receiver
			if (sender === receiverUid)
				return res.status(400).send({
					success: false,
					data: null,
					message: "you cannot send a message to yourself",
				});

			// check if receiver exists
			const receiver = UserController.getById(receiverUid);

			if (!receiver)
				return res.status(404).send({
					success: false,
					data: null,
					message: "wasn't possible to find the receiver",
				});

			// create message and get message id
			const messageUid = await MessageRepository.create(
				sender,
				message,
				receiverUid
			);

			// will push message uid into sender's messages
			await UserController.updateMessages(messageUid, sender);

			// will push message uid into receiver's messages
			await UserController.updateMessages(messageUid, receiverUid);

			res.status(200).send({
				data: null,
				success: true,
				message: "you successfully send a messange",
			});
		} catch (err) {
			console.log(err);
			res.status(501).send({
				message: "something went wrong on the server",
			});
		}
	}
}
