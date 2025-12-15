import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";


const router = express.Router();


router.use(auth);
//GET /api/tasks

router.get("/", getTasks);     //  Get all tasks for the logged-in user
router.post("/", createTask);  // Create a new task
router.put("/:id", updateTask); //Update an existing task by ID
router.delete("/:id", deleteTask);  // Delete a task by ID


export default router;