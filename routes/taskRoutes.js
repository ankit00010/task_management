const express = require("express");
const router = express.Router();
const { getAllTasks, createTasks, getTask, updateTasks, deleteTasks, getStats } = require("../controllers/taskController");
const validateToken = require('../middleware/validateTokenHolder');

router.use(validateToken);

router.route("/").get(getAllTasks).post(createTasks);

router.get("/stats", getStats);



router.route("/:id").get(getTask).put(updateTasks).delete(deleteTasks);



module.exports = router;