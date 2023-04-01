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
import { realEstateFormValidation } from "../../middlewares/validation/realestate";

// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.get(
	"/categories/:categoryName/:realEstateId",
	RealEstateController.queryByCategoryAndId
);

router.get("/:id", RealEstateController.getByParams);

router.put(
	"/:id",
	authGuard,
	uploader.array("images", 6),
	uploadFilesMiddleware,
	realEstateFormValidation(),
	validate,
	RealEstateController.update
);
router.post(
	"/",
	authGuard,
	uploader.array("images", 6),
	uploadFilesMiddleware,
	realEstateFormValidation(),
	validate,
	RealEstateController.create
);

router.delete("/:id", authGuard, RealEstateController.delete);

export { router as realEstateRouter };
