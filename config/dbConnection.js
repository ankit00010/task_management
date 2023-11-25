// Importing Mongoose for database connection
const mongoose = require('mongoose');

// Async function to connect to the database
const connectDB = async () => {
    try {
        // Attempting to connect to the database using the provided connection string
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);

        // Logging a successful database connection
        console.log('Database connected:', connect.connection.host, connect.connection.name);
    } catch (error) {
        // Handling errors during database connection and exiting the process if an error occurs
        console.error(error);
        process.exit(1);
    }
}

// Exporting the connectDB function for use in other parts of the application
module.exports = connectDB;
