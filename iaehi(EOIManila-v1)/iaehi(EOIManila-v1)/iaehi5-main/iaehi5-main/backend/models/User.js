const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  subdepartment: { type: String },
  ageGroup: { type: String, required: true },
  gender: { type: String, required: true },
  score: { type: Number },
  result: { type: String },
  language: { type: String, default: 'en' },
  isHappyWithResult: { type: Boolean },
  timestamp: { type: Date },           
  role: { type: String, required: false }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
