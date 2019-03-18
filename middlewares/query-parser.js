'use strict'

const querystring = require('querystring');

function queryParse(req,res,next) {
    const query = querystring.parse(req.url);
    req.queryParsed = query;
    next();
}

module.exports = queryParse;