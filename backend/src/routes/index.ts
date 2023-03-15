// modules
import express, { Request, Response } from "express";

// routers
const router = express();


// test routes
router.get("/api", (req:Request, res:Response) => {
    res.send("API is working!!");
});

export { router as Router };