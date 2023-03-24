// next auth
import NextAuth from "next-auth/next";

// providers
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// UserController
import UserController from "../../../api/controllers/user";

export default NextAuth({
	secret: process.env.NEXT_AUTH_SECRET,
	session: {
		maxAge: 7 * 24 * 60 * 60,
		strategy: "jwt",
	},
	callbacks: {
		jwt: async ({ token, user, account }) => {
			const isSignIn = !!user;
			if (isSignIn) {
				if (account && account.provider === "google") {
					const { data } = await UserController.signInWithGoogle(
						account.id_token
					);
					token.id = data.id;
					token.accessToken = data.accessToken;
				} else {
					token.accessToken = user.accessToken;
					token.id = user.id;
				}
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (!token) return null;

			const response = await UserController.getUserDetails(
				token.accessToken as string
			);

			console.log(response);
			if (response && token.name !== response?.data?.name)
				token.name = response.data.name;

			session.user.id = token.id as string;
			session.user.name = token.name;
			session.user.email = token.email;
			session.accessToken = token.accessToken as string;
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
