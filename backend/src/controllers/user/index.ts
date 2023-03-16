// interface
import { Request, Response } from "express";
import UserRepository from "../../repository/user";
import { IUserController, IUserControllerDeps } from "../../shared-type/user";

export default class UserController{

    // log in an user
    static async signIn(req: Request, res: Response) {
        const { email, password } = req.body;
        try {

        } catch (err) {

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
    static async signUpWithGoogle(req: Request, res: Response) {
        try {
            const responseAuth = await UserRepository.signUpWithGoogleAuth();
        } catch (err) {
            console.log(err);
            res.status(500).send({
                success: false,
                message: "server wasn't authorized to sign up with google"
            })
        };
    }
}