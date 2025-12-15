import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/api";

export default function Login({ setToken }) {
    // Local state for email and password input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // Handle form submissio
  const submit = async (e) => {
    e.preventDefault();
    try {
        // Call login API with email and password
      const res = await loginUser({ email, password });

      //  Destructure token & name
      const { token, name } = res.data;
console.log( name);
      
      // Store token and name in localStorage for persistence
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);

      setToken(token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      {/*  Welcome Message */}
      <h2 className="text-2xl font-bold text-center mb-4">
        Welcome to Your Personal Task Manager
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <button className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>

      <p className="text-sm text-center">
        Not registered?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </form>
  );
}
