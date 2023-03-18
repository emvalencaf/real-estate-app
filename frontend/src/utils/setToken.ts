import { JWT } from "next-auth/jwt";
import { UserDataFromServer } from "../shared-types/user";

export type Token = {
	jwt: string;
	id: string;
	name: string;
	email: string;
	expiration: number;
};

type SetTokenParams = {
	data: UserDataFromServer;
	token: JWT;
};

export default class TokenHandler {
	static getTokenExpirationInSeconds(): number {
		return Math.floor(7 * 24 * 60 * 60);
	}
	static getActualDateInSeconds(): number {
		return Math.floor(Date.now() / 1000);
	}
	// set expiration for a token
	static setTokenExpiration() {
		return Math.floor(
			TokenHandler.getTokenExpirationInSeconds() +
				TokenHandler.getActualDateInSeconds()
		);
	}
	static isTokenExpirated(expiration: number): boolean {
		return TokenHandler.getActualDateInSeconds() > expiration;
	}
	// set token with user's data
	static setToken({ data, token }: SetTokenParams): void {
		if (
			!data ||
			!data?.accessToken ||
			!data?.email ||
			!data?.name ||
			!data?.id
		)
			return null;

		const { id, name, email, accessToken } = data;

		token.email = email;
		token.name = name;
		token.id = id;
		token.jwt = accessToken;
		token.expiration = TokenHandler.setTokenExpiration();
	}
	// check if token exists, if exist return true
	static isToken(token: Token): boolean {
		if (
			!token ||
			(token && !token?.email) ||
			(token && !token?.expiration) ||
			(token && !token?.jwt) ||
			(token && !token?.name) ||
			(token && !token?.id)
		)
			return false;

		return true;
	}
}
