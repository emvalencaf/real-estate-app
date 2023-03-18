// interface
import { Request, Response } from "express";
import UserRepository from "../../repository/user";
import { IUserController, IUserControllerDeps, IUserServerResponse } from "../../shared-type/user";

export default class UserController{

    // log in an user
    static async signIn(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const response = await UserRepository.signIn({email, password});

            if (!response) throw new Error("no ");

            const { success, user } = response;

            res.status(200).send({
                user,
                success,
                message: success ? "you successfully login" : "you failed to login",
            });

        } catch (err) {
            console.log(err);
            res.status(500).send({
                success: false,
                message: "something went wrong on the server",
            });
        }
    }

    // register an user
    static async signUp(req: Request, res: Response) {
        const { name, email, password } = req.body;
        try {
            const responseAuth = await UserRepository.signUpAuth({name, email, password});

            const response = await UserRepository.signUp({name, email}, responseAuth.uid);

            res.status(201).json({
                response,
                success: true,
                message: "your account was successufully created",
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message:"something went wrong on the server",
            });
        }
    }

    // register an user with google
    static async signInWithGoogle(req: Request, res: Response) {
        const { id_token } = req.body;
        try {
            const responseAuth = await UserRepository.signInWithGoogleAuth(id_token);
            res.status(200).send({
                responseAuth,
                success: true,
                message: "you successfully log in with google",
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                success: false,
                message: "server wasn't authorized to sign in with google"
            })
        };
    }

    // send an email to redefine a new password
    static async fogotPassword(req: Request, res: Response) {
        const { email } = req.body;
        try {

            await UserRepository.fogotPassword(email);

            res.status(200).send({
                success: true,
                message: "an email has been sent to the user's email",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message:"something went wrong on the server",
            });
        }
    }
}