const { CustomError } = require("../config/customError");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: true,
      statusCode: err.statusCode,
      errorMessage: err.message,
    });
  }

  res
    .status(500)
    .json({
      status: false,
      statusCode: 500,
      errorMessage: "Something went wrong!",
    });
};

module.exports = errorMiddleware;
