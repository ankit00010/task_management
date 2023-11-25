// Importing necessary modules and models
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Async function to handle user registration
const userRegister = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;  // Destructuring

    // Validating mandatory fields
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    // Checking if a user with the given email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("Email already exists");
    }

    // Hashing the password before storing in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating a new user in the database
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    // Responding with the registered user details
    if (newUser) {
        res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: newUser,
        });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

// Async function to handle user login
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validating mandatory fields
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    // Finding the user by email
    const user = await User.findOne({ email });

    // Comparing the provided password with the hashed password in the database
    if (user && (await bcrypt.compare(password, user.password))) {
        // Creating an access token using JWT
        const accessToken = jwt.sign({
            user: {
                email: user.email,
                id: user.id,
            },
        },
            process.env.ACCESS_TOKEN_SECRET, // Access token secret
            { expiresIn: "15m" }  // Session timeout
        );
        // Responding with the access token
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

// Async function to get current user information
const getUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

// Exporting the functions for use in other parts of the application
module.exports = { userLogin, userRegister, getUser };
