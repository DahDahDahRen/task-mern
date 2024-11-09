const Task = require("../model/task");
const asyncHandler = require("../middleware/asynHandler");
const { createCustomError } = require("../config/customError");

//TODO: Get all tasks
const getTasksController = asyncHandler(async (req, res, next) => {
  //Get all tasks
  const tasks = await Task.find({});

  //Check tasks
  if (!tasks) {
    return next(createCustomError(500, "Error is working!"));
  }

  //Make a response to client
  res.status(202).json({ status: true, tasks });
});

//TODO: Create new Task
const createTaskController = asyncHandler(async (req, res, next) => {
  //Get user input
  const { title, description } = req.body;

  //Check input
  if (!title || !description) {
    return next(
      createCustomError(404, "No title or description to your task.")
    );
  }

  //Create new task
  const task = await Task.create({ title, description });

  //Check the newly created task
  if (!task) {
    return next(
      createCustomError(
        404,
        "Failed to create your task, Please try again later."
      )
    );
  }

  //Make a response to client
  res.status(202).json({ status: true, task });
});

//TODO: Update Task
const updateTaskController = asyncHandler(async (req, res, next) => {
  //Get user input
  const { title, description } = req.body;
  //Get task id
  const { id } = req.params;

  //Check user input
  if (!title || !description) {
    return next(
      createCustomError(404, "Please provide a valid title or description!")
    );
  }

  //Find and update the task
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

  //Make a response to client
  res.status(202).json({ status: true, task });
});

//TODO: Delete Task
const deleteTaskController = asyncHandler(async (req, res, next) => {
  //Get task id
  const { id } = req.params;

  console.log(id);

  //Find and delete a task
  const task = await Task.findByIdAndDelete(id);

  //Check if task exist
  if (!task) {
    return next(
      createCustomError(404, "That task ID you provides does not exist.")
    );
  }

  //Make a response to client
  res.status(202).json({ status: true, id: task._id });
});

module.exports = {
  getTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
