import { Account } from "next-auth";
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

export type Token = {
	id: string;
	name: string;
	email: string;
	sub: string;
	picture: string;
	iat: number;
	exp: number;
	accessToken: string;
};
