'use strict'

const express = require('express');
const app = express();

const router = require('./routes/router.js');
const cookieParse = require('./middlewares/cookie-parser.js'); 
const queryParse = require('./middlewares/query-parser.js')

app.use(cookieParse);

app.use(queryParse);

app.use(router);

module.exports = app;