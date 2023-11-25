// Importing Mongoose for schema definition
const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // Reference to the User model
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assigned_user: {
        type: String,
        required: true,
    },
    due_date: {
        type: Date,
        required: true,
    },
    completion_status: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true, // Automatically adds "createdAt" and "updatedAt" fields to the document
    });

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

// Exporting the Task model for use in other parts of the application
module.exports = Task;
