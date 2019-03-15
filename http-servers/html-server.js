'use strict';

const http = require('http');
const fs = require('fs');

function preparePage() {
    let content = fs.readFileSync('./index.html').toString();
    content = content.replace('{message}', 'Hello world');
    return content;
}

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text\html');
    const page = preparePage();
    res.write(page);
    res.end();
}).listen(9000);

server.on('listening', () => {
    console.log('server accepting connection');
});

