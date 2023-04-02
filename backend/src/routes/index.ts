// modules
import express, { Request, Response } from "express";

// routers
const router = express();
import { userRouter } from "./user";
import { geocodeRouter } from "./geocode";
import { realEstateRouter } from "./realEstate";
import { messageRouter } from "./message";

// user routes
router.use("/api/users", userRouter);

// geocode routes
router.use("/api/geocode", geocodeRouter);

// message routes
router.use("/api/messages", messageRouter);

// realestate routes
router.use("/api/real-estates", realEstateRouter);

// test routes
router.get("/api", (req: Request, res: Response) => {
	res.send("API is working!!");
});

export { router as Router };
