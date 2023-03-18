import { ServerResponse } from "./server-response";

// user data
export type UserDataFromServer = {
	name?: string;
	email?: string;
	id?: string;
	accessToken?: string;
};

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

// sign in method
export type UserSignInFn = <
	UserSignInResponse
>() => Promise<UserSignInResponse>;

export type UserSignInResponse = ServerResponse<UserDataFromServer>;

// sign in with google method
export type UserSignInWithGoogleResponse = UserSignInResponse;

// fogotPassword method
export type UserFogotPasswordFn = <
	UserFogotPasswordResponse
>() => Promise<UserFogotPasswordResponse>;

export type UserFogotPasswordResponse = ServerResponse<string>;
