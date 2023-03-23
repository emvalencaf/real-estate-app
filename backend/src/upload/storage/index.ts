import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../../../serviceAccountKey.json");

initializeApp({
	credential: cert(serviceAccount),
	storageBucket: process.env.DB_API_STORAGE_BUCKET,
});

// Initialize Cloud Storage and get a reference to the service
export const firebaseStorage = getStorage().bucket();
