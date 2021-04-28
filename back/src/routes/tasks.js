import { Router } from "express";
const router = Router();

// Controller
import {
  createTask,
  deleteTask,
  getTasks,
  getOneTask,
  updateTask,
} from "../controllers/tasks.controller";

// /api/tasks/
router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getOneTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
