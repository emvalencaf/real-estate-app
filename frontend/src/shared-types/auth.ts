import { Account } from "next-auth";
import { Token } from "../utils/setToken";
import { UserDataFromServer } from "./user";

export type CustomSession = {
	accessToken: string;
	user: {
		name: string;
		email: string;
		id: string;
	};
};

export type CallbackJWT = {
	user: UserDataFromServer;
	token: Token;
	account: Account;
};

export type CallbackSession = {
	token: Token;
	session: CustomSession;
};
