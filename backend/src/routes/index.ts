// modules
import express, { Request, Response } from "express";

// routers
const router = express();
import { userRouter } from "./user";
import { geocodeRouter } from "./geocode";

// user routes
router.use("/api/users", userRouter);

// geocode routes
router.use("/api/geocode", geocodeRouter);

// test routes
router.get("/api", (req: Request, res: Response) => {
	res.send("API is working!!");
});

export { router as Router };
