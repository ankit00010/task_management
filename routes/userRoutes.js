// Importing necessary modules and controllers
const express = require('express');
const { userLogin, userRegister, getUser } = require("../controllers/userController");
const validateToken = require('../middleware/validateTokenHolder');

// Creating an Express Router instance
const router = express.Router();

// Endpoint for user registration
router.post('/register', userRegister);

// Endpoint for user login
router.post('/login', userLogin);

// Endpoint to get current user details, protected by token validation middleware
router.get('/current', validateToken, getUser);

// Exporting the router for use in other parts of the application
module.exports = router;
