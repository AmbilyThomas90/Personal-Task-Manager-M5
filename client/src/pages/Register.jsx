import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate(); // React Router navigation
// Handle form submission
  const submit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form); // Call API to register the user
      alert("Registered successfully!");
      navigate("/login"); // Navigate to login page after successful registration
    } catch (err) {
       // Show error message if registration fails
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
