const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// IMPORT ROUTES (THIS WAS MISSING)
const employeeRoutes = require("./routes/employees");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// CONNECT EMPLOYEE ROUTES (THIS IS THE KEY LINE)
app.use("/employees", employeeRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


