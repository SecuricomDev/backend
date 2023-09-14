
// app.js

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes'); // Import your routes module

const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://CameronLuyt69:21102001@contact-keeper.hvfzf.mongodb.net/?retryWrites=true&w=majority'; // Use environment variables

  const corsOptions = {
    origin: function (origin, callback) {
      // Check if the origin is allowed; you can add your logic here
      // For development, you can allow all origins using a wildcard '*'
      if (!origin || origin === 'https://securicom-sms.netlify.app') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'POST', // Allow only POST requests
  };
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas: ', error);
  });

app.use(cors());
app.use(express.json()); // Parse JSON request bodies

app.use('/', router); // Use your router for routing

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Apply CORS middleware
module.exports = cors(corsOptions)(module.exports);