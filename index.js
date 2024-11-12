// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
const logger = require('./middleware/logger');

// Apply middleware
app.use(express.json());  // Built-in middleware to parse JSON
app.use(logger);          // Custom logger middleware

// Import and use routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); // Prefix all routes with /api

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing
