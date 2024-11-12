// index.js
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors()); // Enable all CORS requests

// Middleware to parse JSON
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
