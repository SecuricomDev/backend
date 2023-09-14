// controllers/logController.js

const LogEntry = require('../models/logEntry'); // Import your model

exports.logEntry = async (req, res) => {
  try {
    const { cellNumber } = req.body;
    const date = new Date();

    const logEntry = new LogEntry({ cellNumber, date });
    await logEntry.save();

    res.json({ success: true, logEntry: { cellNumber, date } });
    // Include cellNumber and date in the response JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Could not save log entry' });
  }
};

