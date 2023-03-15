"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// config dotenv
dotenv_1.default.config();
const app = (0, express_1.default)();
// middleares
// config JSON
app.use(express_1.default.json());
// config FormData
app.use(express_1.default.urlencoded({ extended: false }));
// solve CORS
/*
app.use(cors({
    credentials: true,
    origin: `${process.env.FRONTEND_URL}`,
}));*/
// cutom router
const routes_1 = require("./routes");
// routes
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use(routes_1.Router);
exports.default = app;
