'use strict'

const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');

const user = {
    'id' : 'id-example',
    'login' : 'user',
    'password' : 'password',
    'firstName' : 'Viachaslau',
    'lastName' : 'Karotki',
    'email' : 'test@test.com'
}

const token = {
    'id' : 'id-example',
    'token' : 'token-example'
}

passport.use(new FacebookStrategy({
    clientID: '1182863428552083',
    callbackURL: 'http://localhost:9000/api/products'
}, (token, refreshToken, profile, done) => {
    userObject.facebookProfile = profile;
    userObject.username = user.login;
    userObject.email = user.email;
    userObject.token = token;
    done(null,user);
}));

passport.use(new LocalStrategy((userName,password,done) => {
    if (user.login == userName && user.password == password) {
        let genToken = jwt.sign({sub : user.id},token.token);
        let userObject = {};
        userObject.username = user.login;
        userObject.email = user.email;
        userObject.token = genToken;
        done(null,userObject);
    } else {
        done(null, false, 'Bad credentials');
    }
}
));

router.get('/auth/facebook', passport.authenticate('facebook', (req,res) => {
    let respObject = {};
    respObject.code = '200';
    respObject.message = 'OK';
    respObject.data = {};
    respObject.data.user = req.user;
    res.json(respObject);
}));

router.get('/api/products', (req,res) => {
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

router.post('/api/products', passport.authenticate('local', {session : false}), (req, res) => {
    const product = bodyParser.json();
    res.json(product);
});

router.get('/api/users', passport.authenticate('local', {session : false}), (req,res) => {
    res.send('All users');
});

router.post('/auth', (req,res) => {

});

module.exports = router;