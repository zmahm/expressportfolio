// routes/api.js
const express = require('express');
const router = express.Router();

// Root endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Greet endpoint
router.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Post data endpoint
router.post('/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Items endpoint
router.get('/items', (req, res) => {
  // Typically we would fetch this from a database
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  res.json({ items });
});

module.exports = router;
