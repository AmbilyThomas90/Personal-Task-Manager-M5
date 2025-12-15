import { useState, useEffect } from "react";  
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard({ token }) {
  // State to store the task currently being edited
  const [currentTask, setCurrentTask] = useState(null);
  // State to trigger re-render when tasks are added/updated/deleted
  const [refresh, setRefresh] = useState(false);
    // State to store the logged-in user's name
  const [userName, setUserName] = useState("");

    // useEffect runs once on component mount to fetch the user's name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("name");  // Retrieve stored name
    setUserName(name || ""); //  prevents undefined
    console.log(name);
  }, []);

  return (
<div className="max-w-md mx-auto p-6 bg-slate-500 text-indigo-200 rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-4 text-pink-300">

         {userName
          ? `Welcome, ${userName} 👋`
          : "Welcome to Your Personal Task Manager"}
      </h1>

      <TaskForm
        token={token}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      <TaskList
        token={token}
        setCurrentTask={setCurrentTask}
        refresh={refresh}
      />
    </div>
  );
}
