import { useEffect, useState } from "react";
import { getTasks } from "../api/api";
import TaskItem from "./TaskItem";

export default function TaskList({ token, setCurrentTask, refresh }) {
   // Local state to store the list of tasks

  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks from the API
  const fetchTasksList = async () => {
    if (!token) return;   // Do nothing if no token is available
    try {
      const res = await getTasks(token); // Fetch tasks from backend
      setTasks(res.data); // updated tasks
    } catch (err) {
      console.error("Failed to fetch tasks", err.response?.data || err);
    }
  };

    // useEffect to fetch tasks when component mounts or when `refresh` or `token` changes
  useEffect(() => {
    fetchTasksList(); // Re-fetch tasks whenever triggered
  }, [refresh, token]);

  return (
    <ul className="space-y-2">
      {tasks.length === 0 && <p className="text-center text-gray-500">No tasks yet</p>}
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          token={token}
          setCurrentTask={setCurrentTask}
          fetchTasks={fetchTasksList}
        />
      ))}
    </ul>
  );
}
