import { ServerResponse } from "./server-response";

// message model
export type MessageModel = {
	from: string;
	message: string;
	to: string;
};

// message response creation
export type MessageResponseCreation = Promise<ServerResponse<null>>;

// message creation
export type MessageCreateFn = (
	userUid: string,
	message: string,
	token: string,
	receiverUid: string
) => MessageResponseCreation;
