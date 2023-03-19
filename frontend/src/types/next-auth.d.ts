// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name: string;
			email: string;
		};
		accessToken: string;
	}
}

declare module "next-auth" {
	interface User {
		accessToken: string;
	}
}
