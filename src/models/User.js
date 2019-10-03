const mongoose = require('mongoose');

const UseSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('User', UseSchema);
