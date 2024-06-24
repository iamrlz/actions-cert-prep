const express = require('express');
const router = express.Router();
const path = require('path');

// Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// About route
router.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

module.exports = router;
