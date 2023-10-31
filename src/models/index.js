const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.login = require('./login.model');
db.user = require('./user.model');

module.exports = db;