// modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// types
import { Express, Request, Response } from "express";

// config dotenv
dotenv.config();

const app:Express = express();

// middleares
    // config JSON
app.use(express.json());
    // config FormData
app.use(express.urlencoded({ extended: false }));
    // solve CORS
app.use(cors({
    credentials: true,
    origin: `${process.env.FRONTEND_URL}`,
}));

// cutom router
import { Router } from "./routes";

// routes
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use(Router);

export default app;