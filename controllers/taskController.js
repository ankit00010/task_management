// Importing necessary modules and models
const asyncHandler = require("express-async-handler");
const Tasks = require("../models/tasksModels");

// Get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Tasks.find({ user_id: req.user.id });
    res.status(200).json({ tasks });
});

// Create a new task
const createTasks = asyncHandler(async (req, res) => {
    const { title, description, assigned_user, due_date, completion_status } = req.body;

    // Validating mandatory fields
    if (!title || !description || !assigned_user || !due_date || completion_status === undefined) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    // Creating a new task
    const tasks = await Tasks.create({
        title,
        description,
        assigned_user,
        due_date,
        completion_status,
        user_id: req.user.id,
    });
    res.status(201).json(tasks);
});

// Get a specific task
const getTask = asyncHandler(async (req, res) => {
    const task = await Tasks.findById(req.params.id);

    // Checking if the task exists
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    res.status(200).json(task);
});

// Update a task
const updateTasks = asyncHandler(async (req, res) => {
    const task = await Tasks.findById(req.params.id);

    // Checking if the task exists
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    // Checking if the user has permission to update the task
    if (task.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to update other user tasks");
    }

    // Updating the task
    const updatedTasks = await Tasks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedTasks);
});

// Delete a task
const deleteTasks = asyncHandler(async (req, res) => {
    const task = await Tasks.findById(req.params.id);

    // Checking if the task exists
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    // Checking if the user has permission to delete the task
    if (task.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to delete other user tasks");
    }

    // Deleting the task
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task removed successfully" });
});

// Get task statistics
const getStats = asyncHandler(async (req, res) => {
    const userTasks = await Tasks.find({ user_id: req.user.id });

    const currentDate = new Date();
    const weekAgo = new Date(currentDate);
    weekAgo.setDate(currentDate.getDate() - 7);

    // Counting completed tasks in the last 7 days
    const completedTasks = await Tasks.countDocuments({
        user_id: req.user.id,
        completion_status: true,
        createdAt: { $gte: weekAgo, $lte: currentDate }
    });

    // Responding with task statistics
    res.status(200).json({
        message: `In the last 7 days, you completed ${completedTasks} tasks.`,
    });
});

// Exporting the functions for use in other parts of the application
module.exports = { getAllTasks, createTasks, getTask, updateTasks, deleteTasks, getStats };
