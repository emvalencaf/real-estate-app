import { adminFirebase } from "../firebase/admin";

export const generateAccessToken = async (tokenId: string) => {
	try {
		const accessToken = await adminFirebase
			.auth()
			.createSessionCookie(tokenId, {
				expiresIn: 60 * 60 * 24 * 5,
			});
		return accessToken;
	} catch (err) {
		console.log(err);
		throw new Error("failed to generate access token");
	}
};
