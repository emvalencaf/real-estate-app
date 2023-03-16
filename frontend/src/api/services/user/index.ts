// types
import { UserFormData, UserSignUpData } from "../../../shared-types/user";

// utils
import CreateFetch from "../../../utils/createFetch";

export default class UserService {
	static async signIn({
		email,
		password,
	}: Pick<UserFormData, "email" | "password">) {
		const data = {
			email,
			password,
		};
		return await CreateFetch.dispatch(``, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}
	static async signUp({
		name,
		email,
		password,
		confirmPassword,
	}: UserFormData): Promise<UserSignUpData> {
		const data: UserFormData = {
			password,
			confirmPassword,
			email,
			name,
		};
		console.log(data);
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
}
