const asyncHandler = require("../middleware/asynHandler");
const { createCustomError } = require("../config/customError");

const getTasksController = asyncHandler(async (req, res, next) => {
  if (true) {
    return next(createCustomError(500, "Error is working!"));
  }

  res.status(202).json({ status: true, msg: "Hello World!" });
});

module.exports = { getTasksController };
