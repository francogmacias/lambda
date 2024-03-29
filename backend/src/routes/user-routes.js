import { Router } from "express";
import { getAllResources, getResourceById, deleteResourceById } from "../middlewares/sql-middlewares.js";
import {
    registerUser,
    loginUser,
} from "../controllers/users-controller.js";

const router = Router();

router.get("/users", getAllResources("user"));
router.get("/user/:id", getResourceById("user"));
router.delete("/user/:id", deleteResourceById("user"));
router.post("/user", registerUser);
router.post("/user/login", loginUser);

export default router;
