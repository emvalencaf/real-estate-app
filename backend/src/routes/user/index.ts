// express
import express from "express";

// controller
import UserController from "../../controllers/user";

// middlewares
    // validation
import validate from "../../middlewares/validation";
import { userCreateValidation, userLoginValidation } from "../../middlewares/validation/user";

// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.post("/sign-up",
    userCreateValidation(),
    validate,
    UserController.signUp,
);

router.post("/sign-in",
    userLoginValidation(),
    validate,
    UserController.signIn,
);

router.post("/sign-in-with-google", UserController.signInWithGoogle);
export { router as userRouter };