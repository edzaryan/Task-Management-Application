import express from "express";
import {
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask
} from "../controllers/task/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createTask);
router.get("/all", protect, getTasks);
router.get("/:id", protect, getTask);
router.patch("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask)

export default router;