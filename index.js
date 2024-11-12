// index.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http'); // Import serverless-http for Lambda compatibility

const app = express();

// Middleware
app.use(cors({
    origin: '*', // Allow all origins, or specify allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
})); // Enable CORS for all origins
app.use(express.json()); // Enable JSON body parsing

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); // Use the routes with /api prefix

// Conditional: If not in production, start a local server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the app and Lambda handler
module.exports = app; // Export app for local testing with Mocha
module.exports.handler = serverless(app); // Export Lambda handler for AWS
