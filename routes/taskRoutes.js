// Importing necessary modules and controllers
const express = require("express");
const router = express.Router();
const { getAllTasks, createTasks, getTask, updateTasks, deleteTasks, getStats } = require("../controllers/taskController");
const validateToken = require('../middleware/validateTokenHolder');

// Applying token validation middleware to protect all routes
router.use(validateToken);

// Routes for handling tasks
router.route("/").get(getAllTasks).post(createTasks);

// Route for getting task statistics
router.get("/stats", getStats);

// Routes for handling individual tasks by ID
router.route("/:id").get(getTask).put(updateTasks).delete(deleteTasks);

// Exporting the router for use in other parts of the application
module.exports = router;
