// express
import express from "express";

// controller
import RealEstateController from "../../controllers/realestate";

// middlewares
import authGuard from "../../middlewares/authGuard";

// validation
import validate from "../../middlewares/validation";
import { realEstateCreateValidation } from "../../middlewares/validation/realestate";

// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.post(
	"/create",
	authGuard,
	realEstateCreateValidation(),
	validate,
	RealEstateController.create
);

export { router as realEstateRouter };
