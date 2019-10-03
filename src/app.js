const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const env = require('../.env.js');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(env.dbConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = app;
