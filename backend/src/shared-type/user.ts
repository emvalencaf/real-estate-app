import { Request, Response } from "express";
import { Auth, User, UserCredential } from "firebase/auth";
import { IServerResponse } from "./server-response";

// request body
export interface IUserFormData {
    name: string;
    email: string;
    password: string;
};

// response server
export interface IUserServerResponse extends IServerResponse {
    user: IUserModel | null;
}

// user model interface
export interface IUserModel {
    uid: string;
    displayName: string;
    email: string;
}

// user repository deps
export interface IUserRepositoryDeps {
    auth: Auth;
}

// user repository instance
export interface IUserRepository {
    signUp({name, email, password}:IUserFormData): Promise<User>;
    signIn({email, password}:Pick<IUserFormData, "email" | "password">): Promise<void>;
    update(name: string): Promise<void>;
}

// user controller deps
export interface IUserControllerDeps {
    repository: IUserRepository;
}

// user controller instance
export interface IUserController extends IUserControllerDeps{
    signUp(req: Request, res: Response): Promise<Pick<UserCredential, "user">>;
    signIn(req: Request, res: Response): Promise<void>;
    initiliaze(deps: IUserControllerDeps): IUserController;
}