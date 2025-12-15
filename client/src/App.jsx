import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // Initialize token state from localStorage (to persist login across refreshes)
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function to handle successful login
  // Stores JWT in localStorage and updates state
  const handleLogin = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    // Router wraps the entire application to enable routing
    <Router>
      <div className="min-h-screen flex items-center justify-center
                bg-gray-500
                px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-gray-700 p-6 rounded shadow ">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={!token ? <Login setToken={handleLogin} /> : <Navigate to="/dashboard" />}
            />

            <Route
              path="/register"
              element={!token ? <Register /> : <Navigate to="/dashboard" />}
            />

            {/* Protected Route */}
            <Route
              path="/dashboard"
              element={
                token ? (
                  <>
                    <div className="flex items-center justify-between mb-6 p-6
                w-full max-w-xl
                min-h-[120px]
                bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md">

                      <h1 className="text-2xl font-extrabold text-white">
                        📝 Manage your work. Master your time.
                      </h1>

                      <button
                        onClick={logout}
                        className="px-4 py-2 text-sm font-semibold
             text-red-600 bg-white rounded-lg shadow
             hover:bg-red-100 hover:text-red-700 hover:shadow-lg
             focus:outline-none focus:ring-2 focus:ring-red-200
             active:scale-95
             transition-all duration-200 ease-in-out"
                      >
                        Logout
                      </button>
                    </div>

                    <Dashboard token={token} />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Default Redirect */}
            <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
