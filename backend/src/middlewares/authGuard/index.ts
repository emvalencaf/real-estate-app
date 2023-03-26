import { NextFunction, Request, Response } from "express";
import { adminFirebase } from "../../firebase/admin";

export const auth = adminFirebase.auth();

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
		const decodedToken = await auth.verifyIdToken(token, true);

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
