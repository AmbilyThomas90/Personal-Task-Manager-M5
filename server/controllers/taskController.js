import Task from "../models/Task.js";

// to get all tasks for the logged-in user
export const getTasks = async (req, res) => {
const tasks = await Task.find({ user: req.user.id });
res.json(tasks);
};

//Create a new task
export const createTask = async (req, res) => {
const task = await Task.create({ title: req.body.title, user: req.user.id });
res.json(task);
};

//  update an existing task
export const updateTask = async (req, res) => {
const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(task);
};

//delete a task
export const deleteTask = async (req, res) => {
await Task.findByIdAndDelete(req.params.id);
res.json({ message: "Task deleted" });
};