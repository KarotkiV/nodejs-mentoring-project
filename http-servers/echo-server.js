'use strict'

const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    console.log(req.method, req.url);

    const urlObject = url.parse(req.url,true);

    if (urlObject.pathname == '/echo' && urlObject.query.message != null) {
        res.end(urlObject.query.message);
    } else {
        res.end("Response without content");
    }
}).listen(9000);