const express = require('express');
const routers = require('./router');
const app = express();

app.use(routers);

module.exports = app;
