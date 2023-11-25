// Importing Mongoose for schema definition
const mongoose = require("mongoose");

// Defining the user schema using Mongoose
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter the username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
    },
}, {
    timestamps: true, // Automatically adds "createdAt" and "updatedAt" fields to the document
});

// Creating and exporting the User model based on the schema
module.exports = mongoose.model('User', userSchema);
