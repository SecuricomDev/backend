// routes.js

const express = require('express');
const router = express.Router();
const logController = require('./controllers/logController'); // Import your controller

// Define your routes here
router.post('/log', logController.logEntry);

module.exports = router;
