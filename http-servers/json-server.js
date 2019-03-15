'use strict';

const http = require('http');

const product = {
    id : 1,
    name : 'Supreme T-Shirt',
    brand : 'Supreme',
    price : 99.99,
    options: [
        {color : 'blue'},
        {size : 'XL'}
    ]
}

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application\json');
    res.write(JSON.stringify(product));
    res.end();
}).listen(9000);

server.on('listening', () => {
    console.log('server accepting connection');
});

