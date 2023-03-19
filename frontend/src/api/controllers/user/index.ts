// service
import {
	UserFogotPasswordResponse,
	UserFormData,
	UserSignInResponse,
	UserSignInWithGoogleResponse,
	UserSignUpResponse,
	UserUpdateProfileRespose,
} from "../../../shared-types/user";
import UserService from "../../services/user";

export default class UserController {
	// sign in an user with an email and password
	static async signIn({
		email,
		password,
	}: Pick<UserFormData, "email" | "password">): Promise<UserSignInResponse> {
		try {
			// eslint-disable-next-line no-useless-escape
			const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if (!email) throw new Error("you must fill email field");

			if (!password) throw new Error("you must field password field");

			if (!regexEmail.test(email))
				throw new Error("you must fill a valid email at email field");

			const response = await UserService.signIn({ email, password });

			return response;
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}

	// send an email for user's email to reset its password
	static async sendPasswordResetEmail(
		email: string
	): Promise<UserFogotPasswordResponse> {
		return await UserService.sendPasswordResetEmail(email);
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
	static async signInWithGoogle(
		id_token: string
	): Promise<UserSignInWithGoogleResponse> {
		try {
			return await UserService.signInWithGoogle(id_token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
	// update an user profile details
	static async updateProfile(
		name: string,
		currentUserName: string,
		userId: string,
		token: string
	): Promise<UserUpdateProfileRespose> {
		try {
			if (!name)
				throw new Error(
					"you must fill name field to update user's profile name"
				);
			if (name === currentUserName)
				throw new Error("the new name is the same as the current one");
			return await UserService.updateProfile(name, userId, token);
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	}
}
