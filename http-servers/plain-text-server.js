'use strict';

const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text\plain');
    res.write('Hello world');
    res.end();
}).listen(9000);

server.on('listening', () => {
    console.log('server accepting connection');
});

