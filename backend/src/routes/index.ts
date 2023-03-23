// modules
import express, { Request, Response } from "express";

// routers
const router = express();
import { userRouter } from "./user";
import { geocodeRouter } from "./geocode";
import { realEstateRouter } from "./realestate";

// user routes
router.use("/api/users", userRouter);

// geocode routes
router.use("/api/geocode", geocodeRouter);

// realestate routes
router.use("/api/realestate", realEstateRouter);

// test routes
router.get("/api", (req: Request, res: Response) => {
	res.send("API is working!!");
});

export { router as Router };
