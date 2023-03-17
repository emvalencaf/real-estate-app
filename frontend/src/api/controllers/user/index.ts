// service
import {
	UserFormData,
	UserSignInResponse,
	UserSignUpResponse,
} from "../../../shared-types/user";
import UserService from "../../services/user";

export default class UserController {
	static async signIn({
		email,
		password,
	}: Pick<UserFormData, "email" | "password">): Promise<UserSignInResponse> {
		return await UserService.signIn({ email, password });
	}
	// sign up an user with email and password
	static async signUp({
		name,
		email,
		password,
		confirmPassword,
	}: UserFormData): Promise<UserSignUpResponse> {
		try {
			// eslint-disable-next-line no-useless-escape
			const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if (!name) throw new Error("you must fill name field");

			if (name.length < 3)
				throw new Error(
					"you must fill name field with a name of at least 3 characters"
				);

			if (!email) throw new Error("you must fill email field");

			if (!password || !confirmPassword)
				throw new Error("you must field password field");

			if (password.length < 5 || confirmPassword.length < 5)
				throw new Error(
					"you must fill a password of at least 5 characters"
				);

			if (password !== confirmPassword)
				throw new Error(
					"you must field the same password at confirm password field"
				);

			if (!regexEmail.test(email))
				throw new Error("you must fill a valid email at email field");

			const response = await UserService.signUp({
				name,
				email,
				password,
				confirmPassword,
			});

			return response;
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
	// sign up an user with google auth
	static async signInWithGoogle(id_token: string) {
		try {
			return await UserService.signInWithGoogle(id_token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
}
