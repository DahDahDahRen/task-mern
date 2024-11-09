const express = require("express");
const app = express();
const cors = require("cors");
const taskRoutes = require("./router/router");
const errorMiddleware = require("./middleware/errorMiddleware");
const connectToDB = require("./database/db");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/v1", taskRoutes);

app.use(errorMiddleware);

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URL);

    app.listen(5000, () => {
      console.log("Server is running!");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
