// next auth
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// UserController
import UserController from "../../../api/controllers/user";

// firebase
/*
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithCredential,
	GoogleAuthProvider,
} from "firebase/auth";
import UserController from "../../../api/controllers/user";

const firebaseConfig = {
	apiKey: process.env.DB_API_KEY,
	authDomain: process.env.DB_API_AUTH_DOMAIN,
	projectId: process.env.DB_API_PROJECT_ID,
	storageBucket: process.env.DB_API_STORAGE_BUCKET,
	messagingSenderId: process.env.DB_API_MESSAGING_SENDER_ID,
	appId: process.env.DB_API_APP_ID,
};

initializeApp(firebaseConfig);
*/
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
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
});
