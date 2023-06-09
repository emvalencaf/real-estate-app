// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.DB_API_KEY,
	authDomain: process.env.DB_API_AUTH_DOMAIN,
	projectId: process.env.DB_API_PROJECT_ID,
	storageBucket: process.env.DB_API_STORAGE_BUCKET,
	messagingSenderId: process.env.DB_API_MESSAGING_SENDER_ID,
	appId: process.env.DB_API_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const storage = getStorage();
