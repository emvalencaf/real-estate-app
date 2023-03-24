import { Request, Response } from "express";
import { Auth, User, UserCredential } from "firebase/auth";
import {
	DocumentData,
	DocumentReference,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { IRealEstateModel } from "./real-estate";
import { IServerResponse } from "./server-response";

// request body
export interface IUserFormData {
	name: string;
	email: string;
	password: string;
}

// response server controller
export interface IUserServerResponse extends IServerResponse {
	data: IUserSignInResponse;
}

// user model interface
export interface IUserModel {
	id: string;
	name: string;
	email: string;
	accessToken: string;
	listings?: IRealEstateModel[];
}

// user repository deps
export interface IUserRepositoryDeps {
	auth: Auth;
}

// sign in response
export interface IUserSignInResponse {
	user: IUserModel | null;
}

// user repository instance
export interface IUserRepository {
	signUpAuth({ name, email, password }: IUserFormData): Promise<User>;
	signUp({ name, email, password }: IUserFormData): Promise<void>;
	signIn({
		email,
		password,
	}: Pick<IUserFormData, "email" | "password">): Promise<IUserSignInResponse>;
	signInWithGoogleAuth(id_token: string): Promise<IUserSignInResponse>;
	sendPasswordResetEmail(email: string): Promise<void>;
	update(name: string): Promise<void>;
	getUserByEmail(email: string): Promise<QueryDocumentSnapshot<DocumentData>>;
	isUserExists(docRef: DocumentReference<DocumentData>): Promise<boolean>;
}

// user controller deps
export interface IUserControllerDeps {
	repository: IUserRepository;
}

// user controller instance
export interface IUserController extends IUserControllerDeps {
	signUp(req: Request, res: Response): Promise<void>;
	signInWithGoogle(req: Request, res: Response): Promise<void>;
	sendPasswordResetEmail(req: Request, res: Response): Promise<void>;
	signIn(req: Request, res: Response): Promise<void>;
	initiliaze(deps: IUserControllerDeps): IUserController;
}
