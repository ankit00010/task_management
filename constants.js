// Defining constants for commonly used HTTP status codes
exports.constants = {
    VALIDATION_ERROR: 400,       // Client provided invalid data
    UNAUTHORIZED: 401,           // Authentication is required and has failed
    FORBIDDEN: 403,              // Server understood the request, but refuses to authorize it
    NOT_FOUND: 404,              // The requested resource could not be found
    SERVER_ERROR: 500,           // A generic error message returned when an unexpected condition was encountered
};
