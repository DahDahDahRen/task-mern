const express = require("express");
const router = express.Router();
const { getTasksController } = require("../controller/controller");

router.get("/", getTasksController);

module.exports = router;
