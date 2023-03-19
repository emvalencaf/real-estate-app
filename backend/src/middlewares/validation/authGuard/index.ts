import { NextFunction, Request, Response } from "express";
// firebase auth
import * as admin from "firebase-admin";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.DB_URL,
});

export const auth = admin.auth();

const authGuard = async (req: Request, res: Response, next: NextFunction) => {
	// get token from the headers request
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	// check if header has a token
	if (!token)
		return res.status(403).json({
			message: "forbidden access",
		});

	// check if token is valid
	try {
		const decodedToken = await auth.verifyIdToken(token);
		req.user = {
			uid: decodedToken.uid,
			email: decodedToken.email || "",
		};

		next();
	} catch (err) {
		console.log(err);
		res.status(403).json({
			success: false,
			message: "you must be authenticated",
		});
	}
};

export default authGuard;
