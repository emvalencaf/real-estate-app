// express
import express from "express";

// controller
import RealEstateController from "../../controllers/realEstate";

// middlewares
import authGuard from "../../middlewares/authGuard";
import {
	uploader,
	uploadFilesMiddleware,
} from "../../middlewares/uploadImages";

// validation
import validate from "../../middlewares/validation";
import { realEstateCreateValidation } from "../../middlewares/validation/realestate";

// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.get("/:userId", RealEstateController.getAllFromUser);

router.post(
	"/",
	authGuard,
	uploader.array("images", 6),
	uploadFilesMiddleware,
	realEstateCreateValidation(),
	validate,
	RealEstateController.create
);

export { router as realEstateRouter };
