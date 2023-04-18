import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', usersController.getUsers)
router.post("/", usersController.createUser)
router.put("/", usersController.updateUser)

export default router;
