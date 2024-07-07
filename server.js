require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const cors = require("cors"); 
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoute);

app.listen(8000, () => console.log('Server is running on port 8000'));

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error('Connection failed:', err);
  });

  // Export the app for Vercel
module.exports = app;