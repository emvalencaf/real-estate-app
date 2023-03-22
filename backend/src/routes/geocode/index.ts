// express
import express from "express";

// controller
import GeocodeController from "../../controllers/geocode";

// types
import { Router } from "express";

// middleware
import authGuard from "../../middlewares/authGuard";

// validation
import validate from "../../middlewares/validation";
import { geocodeGetLocation } from "../../middlewares/validation/geocode";

// router
const router: Router = express.Router();

// routes
router.post(
	"/location",
	authGuard,
	geocodeGetLocation(),
	validate,
	GeocodeController.getGeoLocation
);

export { router as geocodeRouter };
