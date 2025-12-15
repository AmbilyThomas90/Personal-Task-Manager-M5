import mongoose from "mongoose";

// Create a schema for the Task collection
const taskSchema = new mongoose.Schema({
    // Reference to the User who owns this task
    // Stores the user's ObjectId and links it to the User model
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// Title of the task
title: String,
  // Status of the task (completed or not)
completed: { type: Boolean, default: false }
}, { timestamps: true });


export default mongoose.model("Task", taskSchema);