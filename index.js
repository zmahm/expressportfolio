const express = require('express');
const app = express();
const PORT = 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Greet endpoint
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing
