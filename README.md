# **📝 Personal Task Manager (MERN Stack)**

A **Personal Task Manager** web application that allows users to **register, log in, and manage daily tasks** securely.  
 Built using the **MERN Stack** with JWT authentication and a clean UI.

---

## **🚀 Features**

* 👤 User Authentication (Register & Login)

* 🔐 JWT-based protected routes

* 📝 Add, edit, delete tasks

* ✅ Mark tasks as completed

* 🎨 Clean & responsive UI

* 💾 Persistent data using MongoDB

* 🔄 Real-time task refresh

---

## **🛠️ Tech Stack**

### **Frontend**

* React

* React Router

* Tailwind CSS

* Axios

### **Backend**

* Node.js

* Express.js

* MongoDB

* Mongoose

* JWT Authentication

* bcrypt

---

## **📂 Project Structure**

`personal-task-manager/`  
`│`  
`├── backend/`  
`│   ├── controllers/`  
`│   ├── middleware/`  
`│   ├── models/`  
`│   ├── routes/`  
`│   ├── config/`  
`│   └── server.js`  
`│`  
`├── frontend/`  
`│   ├── components/`  
`│   ├── pages/`  
`│   ├── api/`  
`│   └── App.jsx`  
`│`  
`└── README.md`

---

## **🔐 Authentication Flow**

1. User registers with name, email, and password

2. Password is securely hashed

3. User logs in and receives a JWT token

4. Token is stored in `localStorage`

5. Protected routes require valid JWT

---

## **📦 API Endpoints**

### **Auth Routes**

`POST   /api/auth/register   → Register user`  
`POST   /api/auth/login      → Login user`

### **Task Routes (Protected)**

`GET    /api/tasks           → Get all tasks`  
`POST   /api/tasks           → Create task`  
`PUT    /api/tasks/:id       → Update task`  
`DELETE /api/tasks/:id       → Delete task`

---

**▶️ Run** 

## **Backend**

`cd backend`  
`npm install`  
`npm start`

### **Frontend**

`cd frontend`  
`npm install`  
`npm run dev`

