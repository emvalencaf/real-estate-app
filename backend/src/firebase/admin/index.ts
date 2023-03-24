// firebase auth
import * as admin from "firebase-admin";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../../../serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.DB_URL,
	storageBucket: process.env.DB_API_STORAGE_BUCKET,
});

export { admin as adminFirebase };
