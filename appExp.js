'use strict'

const express = require('express');
const router = express.Router();
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const querystring = require('querystring');

app.use(cookieParser());

app.use((req,res,next) => {
    req.parsedCookies = req.cookies;
    next();
});

app.use((req,res,next) => {
    const query = querystring.parse(req.url);
    req.queryParsed = query;
    next();
});

router.get('/api/products',(req,res) => {
    res.send('All products');
});

router.param('id',(req,res,next,id) => {
    req.params.id = id;
    next();
});

router.get('/api/products/:id',(req,res) => {
    res.send(`Product id = ${req.params.id}`);
});

router.get('/api/products/:id/reviews', (req, res) => {
    res.send(`Review of product id = ${req.params.id}`);
});

router.post('/api/products', (req, res) => {
    const product = bodyParser.json();
    res.json(product);
});

router.get('/api/users', (req,res) => {
    res.send('All users');
});

app.use(router);

app.listen(9000);

exports.default = app;