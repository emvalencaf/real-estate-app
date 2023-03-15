"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
// express
const express_1 = __importDefault(require("express"));
// controller
const user_1 = __importDefault(require("../../controllers/user"));
// middlewares
// validation
const validation_1 = __importDefault(require("../../middlewares/validation"));
const user_2 = require("../../middlewares/validation/user");
// router
const router = express_1.default.Router();
exports.userRouter = router;
// routes
router.post("/sign-up", (0, user_2.userCreateValidation)(), validation_1.default, user_1.default.signUp);
