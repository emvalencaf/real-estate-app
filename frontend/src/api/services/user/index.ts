// types
import {
	UserFogotPasswordResponse,
	UserFormData,
	UserSignInResponse,
	UserSignUpData,
	UserSignUpResponse,
} from "../../../shared-types/user";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class UserService {
	static async signIn({
		email,
		password,
	}: Pick<UserFormData, "email" | "password">): Promise<UserSignInResponse> {
		const data = {
			email,
			password,
		};
		return await CreateFetch.dispatch<UserSignInResponse>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/users/sign-in`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);
	}
	// sign up an user with email and password
	static async signUp({
		name,
		email,
		password,
		confirmPassword,
	}: UserFormData): Promise<UserSignUpResponse> {
		const data: UserFormData = {
			password,
			confirmPassword,
			email,
			name,
		};

		return await CreateFetch.dispatch<UserSignUpData>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/users/sign-up`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);
	}
	// sign up an user with google auth
	static async signInWithGoogle(id_token: string) {
		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/users/sign-in-with-google`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id_token,
				}),
			}
		);
	}
	// fogot password
	static async fogotPassword(
		email: string
	): Promise<UserFogotPasswordResponse> {
		return await CreateFetch.dispatch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/users/fogot-password`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
				}),
			}
		);
	}
}
