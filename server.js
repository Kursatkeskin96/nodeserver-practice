require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => console.log("server is running on port 8000"));

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("connection failed.");
  });
