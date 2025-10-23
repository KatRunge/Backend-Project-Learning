const express = require("express");
const { getEmployees } = require("./getEmployees");
const { createEmployee } = require("./createEmployee");
const { getSingleEmployee } = require("./getSingleEmployee");
const { getSingleAddress } = require("./getSingleAddress");
const { createEmployeeAddress } = require("./createEmployeeAddress");
const { getSingleEmployeeAddresses } = require("./getSingleEmployeeAddresses");
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

/**
 * @openapi
 * /api/employees:
 *   get:
 *     tags:
 *       - Employees
 *     summary: Get all employees with their addresses
 *     description: Retrieves a list of all employees joined with their address information
 *     responses:
 *       200:
 *         description: Successfully retrieved list of employees with addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: Employee unique identifier
 *                     example: "a9156a50-5136-4cb9-bf16-589ba6c8e81a"
 *                   name:
 *                     type: string
 *                     description: Employee full name
 *                     example: "Juan"
 *                   position:
 *                     type: string
 *                     description: Employee job position
 *                     example: "Backend Engineer"
 *                   age:
 *                     type: string
 *                     description: Employee age
 *                     example: "37"
 *                   nationality:
 *                     type: string
 *                     description: Employee nationality
 *                     example: "Mexican"
 *                   gender:
 *                     type: string
 *                     description: Employee gender
 *                     example: "masculine"
 *                   street:
 *                     type: string
 *                     description: Address street name
 *                     example: "Stresemannstraße"
 *                   house_number:
 *                     type: string
 *                     description: Address house number
 *                     example: "375"
 *                   postal_code:
 *                     type: string
 *                     description: Address postal code
 *                     example: "22761"
 *                   city:
 *                     type: string
 *                     description: Address city
 *                     example: "Hamburg"
 *                   country:
 *                     type: string
 *                     description: Address country
 *                     example: "Germany"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to fetch employees"
 *                 message:
 *                   type: string
 *                   example: "Database connection error"
 */
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

// get single employee endpoint
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

// get employee addresses endpoint
app.get("/api/employees/:employeeId/address", async (req, res) => {
  try {
    const result = await getSingleEmployeeAddresses(req.params.employeeId);
    res.json(result);
  } catch (err) {
    console.error("Error fetching employee address:", err);
    res.status(500).json({
      error: "Failed to fetch employee address",
      message: err.message,
    });
  }
});

// get employee single address endpoint
app.get("/api/employees/:employeeId/address/:addressId", async (req, res) => {
  try {
    const result = await getSingleAddress(
      req.params.employeeId,
      req.params.addressId
    );
    res.json(result);
  } catch (err) {
    console.error("Error fetching single address:", err);
    res.status(500).json({
      error: "Failed to fetch single address",
      message: err.message,
    });
  }
});

// Post endpoint
// Create a new employee
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

// Create a new employee address
app.post("/api/employee/:employeeId/address", async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const addressDTO = req.body;
    const result = await createEmployeeAddress(employeeId, addressDTO);
    res.json(result);
  } catch (err) {
    console.error("Error creating employee address:", err);
    res.status(500).json({
      error: "Failed to create employee address",
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
