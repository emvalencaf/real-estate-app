// modules
import express, { Request, Response } from "express";

// routers
const router = express();
import { userRouter } from "./user";

// user routes
router.use("/api/users", userRouter);

// test routes
router.get("/api", (req:Request, res:Response) => {
    res.send("API is working!!");
});

export { router as Router };