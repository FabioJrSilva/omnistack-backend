const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const env = require('../.env.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

mongoose.connect(env.dbConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen('3333', () => {
  console.log('server listening port 3333');
});
