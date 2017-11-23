const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose/');

const routes = require('./routes/routes')

const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost:27017/muber', {
    useMongoClient: true
  }, (err) => {
    if (err) {
      console.log('error!!!' + err);
    } else {
      console.log('connected to DATAbaSEEEEE!!!!!!');
    }
  });
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  });
});

module.exports = app;
