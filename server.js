require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/products", productRoute);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

// Export the app for Vercel
module.exports = app;
