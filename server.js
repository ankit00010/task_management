// Importing required modules and packages
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// Creating an Express application
const app = express();

// Establishing a connection to the database
const connectionDB = require("./config/dbConnection");
connectionDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Setting up the port for the server, using the provided PORT or defaulting to 5001
const port = process.env.PORT || 5001;

// Routing for tasks and users APIs
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Middleware to handle errors
app.use(errorHandler);

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
