const express = require("express");
const router = express.Router();
const {
  getTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} = require("../controller/controller");

router.get("/", getTasksController).post("/", createTaskController);

router
  .patch("/task/:id", updateTaskController)
  .delete("/task/:id", deleteTaskController);

module.exports = router;
