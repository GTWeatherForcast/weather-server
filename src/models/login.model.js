const mongoose = require('mongoose');

const Login = mongoose.model(
  'Login',
  new mongoose.Schema({
    username: String,
    password: String,
  }),
);

module.exports = Login;