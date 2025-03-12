const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint with path parameter that returns random status
app.get('/api/status/:id', (req, res) => {
  const id = req.params.id; // Get the ID from URL parameters
  const statuses = ['delivered', 'pending'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  res.json({
    id,
    status: randomStatus,
    timestamp: new Date().toISOString()
  });
});

// Basic status endpoint without parameter
app.get('/api/status', (req, res) => {
  const statuses = ['delivered', 'pending'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  res.json({
    status: randomStatus,
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Status API running at http://localhost:${port}`);
});