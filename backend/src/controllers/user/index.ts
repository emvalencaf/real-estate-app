import { Request, Response } from "express";

// repository
import UserRepository from "../../repository/user";

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
            const response = await UserRepository.signUp({name, email, password});
            res.status(201).json({
                response,
                message: "your account was successufully created",
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message:"something went wrong in server"
            });
        }
    }
}