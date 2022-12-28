import express from "express";
import { validate } from "../middlewares/Validate";

import { update, create } from "../utils/validations/Auth";
import AuthController from "../controllers/Auth";

const router = express.Router();

//Create user
router.post("/", validate(create), AuthController.register);

// Update user
// router.patch("/", validate(update), UserController.update);

// // List users
// router.get("/", UserController.index);

// // Get user by id
// router.get("/:id", UserController.show);

// // Delete user
// router.delete("/:id", UserController.delete);

export default router;
