const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/RoomFinderApi'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose }  // Export the active connection.