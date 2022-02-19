const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/todo';

mongoose.connect(URL, { useNewUrlParser: true });

module.exports = mongoose;
