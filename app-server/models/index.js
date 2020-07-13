const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/appapi', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('debug', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.Promise = Promise;

module.exports.Money = require("./money");
module.exports.User = require("./user");