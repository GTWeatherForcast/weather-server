const mongoose = require('mongoose');

const Register = mongoose.model(
  'Register',
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  }),
);

module.exports = Register;