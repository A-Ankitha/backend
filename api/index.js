const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../connect/connect");
const { router } = require("../routes/route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.use("/api/v1", router);

connectDB(process.env.MONGO_URI);

module.exports = app;