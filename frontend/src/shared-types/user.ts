import { ServerResponse } from "./server-response";

// request body
export type UserFormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

// sign up method
export type UserSignUpData = {
	success: boolean;
	message: string;
};

export type UserSignUpFn = <UserSignUpData>() => Promise<UserSignUpData>;

export type UserSignUpResponse = ServerResponse<null>;
