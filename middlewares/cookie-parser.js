'use strict'

const cookie = require('cookie')

function cookieParse(req,res,next) {
    if (req.cookies != null) {
        let parsedCookies = cookie.parse(req.cookie);
        req.parsedCookies = parsedCookies;
    }
    next();
}

module.exports = cookieParse;