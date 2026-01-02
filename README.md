# Employee Management Dashboard

A full-stack Employee Management Dashboard built using **React**, **Node.js**, and **Express.js**.  
This application allows users to manage employee records through complete CRUD operations with persistent file-based storage.

---

## Project Overview

The Employee Management Dashboard is designed to store and manage employee details in a structured way.  
Users can add, view, update, and delete employee records using a web-based dashboard.

The frontend is developed using **React**, while the backend is built using **Node.js and Express.js**.  
Employee data is stored in a **JSON file**, ensuring data persistence even after restarting the server.

---

## Technologies Used

### Frontend
- React.js
- Axios
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js
- CORS
- Body-Parser

### Storage
- JSON file (`employees.json`)

### Tools
- Visual Studio Code
- Postman
- Git and GitHub

---

## Project Structure

EMPLOYEE-DASHBOARD/
├── backend/
│ ├── routes/
│ │ └── employees.js
│ ├── data/
│ │ └── employees.json
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── EmployeeForm.jsx
│ │ │ ├── EmployeeTable.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ └── App.jsx
└── README.md
