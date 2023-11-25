const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const connectionDB = require("./config/dbConnection");

connectionDB();



app.use(express.json());

const port = process.env.PORT || 5001;

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})


module.exports = { app };