const express = require("express");
const { getEmployees } = require("./getEmployees");
const { createEmployee } = require("./createEmployee");
const { getSingleEmployee } = require("./getSingleEmployee");
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
  });
});

// Example endpoint that uses the database
app.get("/api/employees", async (req, res) => {
  try {
    const result = await getEmployees();
    res.json(result);
  } catch (err) {
    console.error("Error fetching employees:", err);
    res.status(500).json({
      error: "Failed to fetch employees",
      message: err.message,
    });
  }
});


// single employee
app.get("/api/employee/:employeeId", async (req, res) => {
  try {
    const result = await getSingleEmployee(req.params.employeeId);
    res.json(result);
  } catch (err) {
    console.error("Error fetching employee:", err);
    res.status(500).json({
      error: "Failed to fetch employee",
      message: err.message,
    });
  }
});



// Post endpoint
app.post("/api/employee", async (req, res) => {
  try {
    const employeeDTO = req.body;
    const result = await createEmployee(employeeDTO);
    res.json(result);
  } catch (err) {
    console.error("Error creating employee:", err);
    res.status(500).json({
      error: "Failed to create employee",
      message: err.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
