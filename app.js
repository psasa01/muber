const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose/');

const routes = require('./routes/routes')

const app = express();

mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://localhost:27017/muber', {
  useMongoClient: true
});

app.use(bodyParser.json());
routes(app);

module.exports = app;
