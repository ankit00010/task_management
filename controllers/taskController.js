const asyncHandler = require("express-async-handler");
const Tasks = require("../models/tasksModels");
// Get all tasks
//@route GET /api/tasks
//access public
const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Tasks.find({ message: "Tasks retrieved successfully", user_id: req.user.id });
    res.status(200).json({ userData: tasks });
})

const createTasks = asyncHandler(async (req, res) => {

    const { title, description, assigned_user, due_date, completion_status } = req.body;
    if (!title || !description || !assigned_user || !due_date || completion_status === undefined) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }


    const tasks = await Tasks.create({
        title,
        description,
        assigned_user,
        due_date,
        completion_status,
        user_id: req.user.id,
    });
    res.status(201).json(tasks);
}
);

const getTask = asyncHandler(async (req, res) => {

    const task = await Tasks.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found")
    }
    res.status(200).json(task);



}
);


const updateTasks = asyncHandler(async (req, res) => {


    const task = await Tasks.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found")
    }
    if (task.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other user contacts");
    }

    const updatedTasks = await Tasks.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }

    )
    res.status(200).json(updatedTasks);

});




const deleteTasks = asyncHandler(async (req, res) => {
    const task = await Tasks.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    if (task.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other user contacts");
    }
    const deletedTask = await Tasks.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Task removed successfully" });
});


const getStats = asyncHandler(async (req, res) => {
    try {
        // Find all tasks created by the user
        const userTasks = await Tasks.find({ user_id: req.user.id });

        // Get the number of completed tasks in the last 7 days
        const currentDate = new Date();
        const weekAgo = new Date(currentDate);
        weekAgo.setDate(currentDate.getDate() - 7);

        const completedTasks = await Tasks.countDocuments({
            user_id: req.user.id,
            completion_status: true,
            createdAt: { $gte: weekAgo, $lte: currentDate }
        });

        res.status(200).json({
            message: `In the last 7 days, you completed ${completedTasks} tasks.`,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});






module.exports = { getAllTasks, createTasks, getTask, updateTasks, deleteTasks, getStats }