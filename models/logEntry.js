// models/logEntry.js

const mongoose = require('mongoose');

const logEntrySchema = new mongoose.Schema({
  cellNumber: String,
  date: Date,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
