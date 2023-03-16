// next auth
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

// firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.DB_API_KEY,
	authDomain: process.env.DB_API_AUTH_DOMAIN,
	projectId: process.env.DB_API_PROJECT_ID,
	storageBucket: process.env.DB_API_STORAGE_BUCKET,
	messagingSenderId: process.env.DB_API_MESSAGING_SENDER_ID,
	appId: process.env.DB_API_APP_ID,
};

const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

const firestore = getFirestore(firebaseApp);

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	adapter: FirestoreAdapter(firestore),
});
