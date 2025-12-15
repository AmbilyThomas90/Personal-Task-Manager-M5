import { useState } from "react";
import { deleteTask, updateTask } from "../api/api";

export default function TaskItem({ task, token, setCurrentTask, fetchTasks }) {
   // Local state to track whether the task is completed
  const [completed, setCompleted] = useState(task.completed || false);

    // Function to handle deleting the task
  const handleDelete = async () => {
    await deleteTask(task._id, token);
    if (fetchTasks) fetchTasks();
  };
  // Function to toggle task completion
  const toggleComplete = async () => {
    const updatedTask = { ...task, completed: !completed };
    await updateTask(task._id, updatedTask, token);
    setCompleted(!completed);
    if (fetchTasks) fetchTasks();
  };

  return (
    <li className="flex justify-between items-center p-4 mb-2 bg-white rounded-lg shadow-sm
                   border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleComplete}
          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <span
          className={`text-gray-800 font-medium break-words ${completed ? "line-through text-gray-400" : ""}`}
        >
          {task.title}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCurrentTask(task)}
          className="px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100
                     rounded-md hover:bg-yellow-200 active:scale-95 transition-all duration-150"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100
                     rounded-md hover:bg-red-200 active:scale-95 transition-all duration-150"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
