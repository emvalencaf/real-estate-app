import { Request, Response } from "express";

export default class UserController{
    static signIn(req: Request, res: Response) {
        const { email, password } = req.body;
        try {

        } catch (err) {
            
        }
    }
    static signUp(req: Request, res: Response) {

    }
}