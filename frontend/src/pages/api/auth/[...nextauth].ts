// next auth
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// UserController
import UserController from "../../../api/controllers/user";

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: 7 * 24 * 60 * 60,
		strategy: "jwt",
	},
	callbacks: {
		async signIn({ account }) {
			if (account.provider === "google") {
				/*
				const auth = getAuth();
				const credential = GoogleAuthProvider.credential(
					account.id_token
				);
				await signInWithCredential(auth, credential);*/
				await UserController.signInWithGoogle(account.id_token);
			}

			return true;
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

					if (!login.success) throw new Error("No login");
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
