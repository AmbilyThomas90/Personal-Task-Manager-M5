import { useState, useEffect } from "react";
import { addTask, updateTask } from "../api/api";

export default function TaskForm({ token, currentTask, setCurrentTask, refresh, setRefresh }) {
  // Local state for the input field (task title)
  const [title, setTitle] = useState("");

  // useEffect to populate the input field when editing an existing task
  useEffect(() => {
    if (currentTask) setTitle(currentTask.title);
  }, [currentTask]);

  // Handles form submission (adding or updating a task)
  const submitHandler = async (e) => {
    e.preventDefault();

    // Do nothing if input is empty or only spaces
    if (!title.trim()) return;

    try {
      // Update existing task
      if (currentTask) {
        await updateTask(currentTask._id, { title }, token);
        setCurrentTask(null);
      } else {
        // Add new task
        await addTask({ title }, token);
      }

      setTitle("");  // Clear input field
      setRefresh(!refresh); //  triggers re-fetch in TaskList
    } catch (err) {
      console.error("Task save failed", err.response?.data || err);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center gap-3 mb-2 p-4 bg-white rounded-xl shadow-md"
    >
      <textarea
        rows={2}
        placeholder="✍️ Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-400
             resize-y transition"
      />



      <button
        type="submit"
        className={`px-5 py-2 text-sm font-semibold rounded-lg text-white
      ${currentTask
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-600"}
      active:scale-95 transition-all duration-200 shadow`}
      >
        {currentTask ? "Update" : "Add"}
      </button>
    </form>

  );
}
