// Importing necessary modules
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Middleware to validate and extract user information from a JWT token
const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    // Extracting the Authorization header from the request
    let authHeader = req.headers.Authorization || req.headers.authorization;

    // Checking if the header is present and starts with "Bearer"
    if (authHeader && authHeader.startsWith("Bearer")) {
        // Splitting the header to extract the token
        const tokenArray = authHeader.split(" ");
        token = tokenArray.length >= 2 ? tokenArray[1] : null;

        // Checking if a token is present
        if (!token) {
            res.status(401);
            throw new Error("Not authorized");
        } else {
            // Verifying the token using the secret key
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    res.status(401);
                    return next(new Error("User is not authorized"));
                }
                // Setting user information in the request object
                req.user = decoded.user;
                next();
            });
        }
    } else {
        // Handling cases where the Authorization header is missing or improperly formatted
        res.status(401);
        throw new Error("Not authorized");
    }
});

// Exporting the middleware for use in other parts of the application
module.exports = validateToken;
