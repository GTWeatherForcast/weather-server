const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.login = require('./login.model');
db.register = require('./register.model');

module.exports = db;