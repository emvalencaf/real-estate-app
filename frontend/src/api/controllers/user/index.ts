// service
import { UserFormData, UserSignUpData } from "../../../shared-types/user";
import UserService from "../../services/user";

export default class UserController {
	static async signIn({
		email,
		password,
	}: Pick<UserFormData, "email" | "password">) {
		return await UserService.signIn({ email, password });
	}
	static async signUp({
		name,
		email,
		password,
		confirmPassword,
	}: UserFormData): Promise<UserSignUpData> {
		try {
			return await UserService.signUp({
				name,
				email,
				password,
				confirmPassword,
			});
		} catch (err) {
			console.log(err);
		}
	}
}
