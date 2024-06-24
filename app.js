const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
