"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../repository/user"));
class UserController {
    // log in an user
    static signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
            }
            catch (err) {
            }
        });
    }
    // register an user
    static signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                const responseAuth = yield user_1.default.signUpAuth({ name, email, password });
                const response = yield user_1.default.signUp({ name, email }, responseAuth.uid);
                res.status(201).json({
                    response,
                    success: true,
                    message: "your account was successufully created",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: "something went wrong on the server",
                });
            }
        });
    }
}
exports.default = UserController;
