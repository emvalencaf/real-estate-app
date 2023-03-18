// next auth
import NextAuth from "next-auth/next";

// providers
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// UserController
import UserController from "../../../api/controllers/user";

// types
import { UserDataFromServer } from "../../../shared-types/user";

// utils
import TokenHandler from "../../../utils/setToken";

export default NextAuth({
	secret: process.env.NEXT_AUTH_SECRET,
	session: {
		maxAge: 7 * 24 * 60 * 60,
		strategy: "jwt",
	},
	callbacks: {
		jwt: async ({ user, token, account }) => {
			const isSignIn = !!user;

			if (!isSignIn) return Promise.resolve({});

			const data: UserDataFromServer =
				account && account?.provider === "google"
					? await (
							await UserController.signInWithGoogle(
								account?.id_token
							)
					  ).data
					: user;
			// will set a token with a token object or a null value
			TokenHandler.setToken({
				data,
				token,
			});
			if (!token || (token && !token?.expiration))
				return Promise.resolve({});

			if (TokenHandler.isTokenExpirated(token.expiration as number))
				return Promise.resolve({});

			return Promise.resolve(token);
		},
		session: async ({ session, token }) => {
			if (
				!token ||
				(token && !token?.email) ||
				(token && !token?.name) ||
				(token && !token?.id) ||
				(token && !token?.jwt) ||
				(token &&
					TokenHandler.isTokenExpirated(token.expiration as number))
			)
				return null;

			session.accessToken = token.jwt;

			session.user = {
				id: token.id,
				name: token.name,
				email: token.email,
			};

			return session;
		},
		redirect: async ({ url, baseUrl }) => {
			if (url.startsWith(baseUrl)) return url;

			if (url.startsWith("/")) return baseUrl + url;

			return baseUrl;
		},
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "username",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "password",
				},
			},
			async authorize(credentials) {
				if (!credentials?.username || !credentials?.password)
					return null;

				try {
					const body = {
						email: credentials.username,
						password: credentials.password,
					};

					const login = await UserController.signIn(body);

					if (!login.success) return null;

					const { data } = login;

					const { name, email, accessToken, id } = data;

					if (!accessToken || !name || !accessToken || !id)
						return null;

					return {
						id,
						name,
						email,
						accessToken,
					};
				} catch (err) {
					console.log(err);
					return null;
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
});
