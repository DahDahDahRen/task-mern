const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      isDone: false,
      required: [true, "Please input a title to your task."],
    },
    description: {
      type: String,
      required: [true, "Please input a description to your task"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
