const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => console.log(`server is running on port 8000`));

mongoose
  .connect(
    "mongodb+srv://kursatkeskinn:7YCNGbP6EiAS2Ime@cluster0.hoidwlz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("connection failed.");
  });
