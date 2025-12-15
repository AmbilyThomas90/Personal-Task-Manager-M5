import axios from "axios";
// Base URL for all backend API requests
// Change this when deploying to production
const API_URL = "https://personal-task-manager-n26d.onrender.com/api";

// Register a new user
// Sends user data (name, email, password) to backend

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);

// Login user
// Sends email and password, receives JWT token & user info

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

// Fetch all tasks for the logged-in user
// Token is sent in Authorization header

export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, { headers: { Authorization: token } });

// Add a new task
// Sends task object (title) and JWT token

export const addTask = (task, token) =>
  axios.post(`${API_URL}/tasks`, task, { headers: { Authorization: token } });

// Update an existing task by ID
// Sends updated task data and JWT token

export const updateTask = (id, task, token) =>
  axios.put(`${API_URL}/tasks/${id}`, task, { headers: { Authorization: token } });

// Delete a task by ID
// Sends JWT token for authentication

export const deleteTask = (id, token) =>
  axios.delete(`${API_URL}/tasks/${id}`, { headers: { Authorization: token } });




// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

// // Request interceptor to attach JWT token
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// export default api;