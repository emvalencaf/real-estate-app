// express
import express from "express";

// controller
import MessageController from "../../controllers/message";

// types
import { Router } from "express";

// middleware
import authGuard from "../../middlewares/authGuard";

// validation
import validate from "../../middlewares/validation";
import { messageCreateValidation } from "../../middlewares/validation/message";

// router
const router: Router = express.Router();

// routes
router.post(
	"/:receiverUid",
	authGuard,
	messageCreateValidation(),
	validate,
	MessageController.create
);

export { router as messageRouter };
