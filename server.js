// Required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Store admin settings (in-memory for simplicity)
let adminStatusSetting = 'pending'; // default value

// API 1: Random status from [pending, delivered]
app.get('/api/status/random', (req, res) => {
    const statusOptions = ['pending', 'delivered'];
    const randomIndex = Math.floor(Math.random() * statusOptions.length);
    const randomStatus = statusOptions[randomIndex];
    
    res.json({
        status: randomStatus,
        timestamp: new Date().toISOString()
    });
});

// API 2: Status based on admin input
app.get('/api/status/admin', (req, res) => {
    res.json({
        status: adminStatusSetting,
        timestamp: new Date().toISOString()
    });
});

// API to update admin status setting
app.post('/api/admin/status', (req, res) => {
    const { status } = req.body;
    
    // Validate input
    const validStatuses = ['pending', 'delivered', 'unknown'];
    if (!status || !validStatuses.includes(status)) {
        return res.status(400).json({ 
            error: 'Invalid status. Must be one of: pending, delivered, unknown' 
        });
    }
    
    // Update admin setting
    adminStatusSetting = status;
    
    res.json({ 
        message: 'Admin status updated successfully',
        currentStatus: adminStatusSetting
    });
});

// Serve the admin UI
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});