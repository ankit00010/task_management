// Importing constants for HTTP status codes
const { constants } = require('../constants');

// Error handling middleware
const errorHandler = (err, req, res, next) => {

    // Getting the HTTP status code from the response or defaulting to 500
    const statusCode = res.statusCode || 500;

    // Handling different error cases based on status code
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            // Handling validation errors
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            // Handling not found errors
            console.log("Reached");
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;

        case constants.FORBIDDEN:
            // Handling forbidden errors
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTHORIZED:
            // Handling unauthorized errors
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;

        case constants.SERVER_ERROR:
            // Handling generic server errors
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
            break;

        default:
            // Default case for other errors
            console.log("No Error!!!");
            break;
    }
}

// Exporting the error handling middleware for use in other parts of the application
module.exports = errorHandler;
