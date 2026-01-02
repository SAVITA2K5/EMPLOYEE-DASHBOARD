const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Path to JSON file
const dataFile = path.join(__dirname, "../data/employees.json");

// Read employees from file
function readEmployees() {
  const data = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(data);
}

// Write employees to file
function writeEmployees(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

/* ---------------- GET ALL EMPLOYEES ---------------- */
router.get("/", (req, res) => {
  const employees = readEmployees();
  res.status(200).json(employees);
});

/* ---------------- CREATE EMPLOYEE ---------------- */
router.post("/", (req, res) => {
  const { name, department, role, salary, status } = req.body;

  if (!name || !department || !role || !salary || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const employees = readEmployees();

  const newEmployee = {
    id: Date.now(),
    name,
    department,
    role,
    salary,
    status
  };

  employees.push(newEmployee);
  writeEmployees(employees);

  res.status(201).json({
    message: "Employee added successfully",
    employee: newEmployee
  });
});

/* ---------------- UPDATE EMPLOYEE ---------------- */
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, department, role, salary, status } = req.body;

  const employees = readEmployees();
  const index = employees.findIndex(emp => emp.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  employees[index] = {
    ...employees[index],
    name,
    department,
    role,
    salary,
    status
  };

  writeEmployees(employees);

  res.status(200).json({
    message: "Employee updated successfully",
    employee: employees[index]
  });
});

/* ---------------- DELETE EMPLOYEE ---------------- */
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const employees = readEmployees();
  const filtered = employees.filter(emp => emp.id !== id);

  if (filtered.length === employees.length) {
    return res.status(404).json({ message: "Employee not found" });
  }

  writeEmployees(filtered);

  res.status(200).json({ message: "Employee deleted successfully" });
});

module.exports = router;
