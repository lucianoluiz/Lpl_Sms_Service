'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const communicationRoute = require('./routes/communicaton-route');

app.use(bodyParser.json({
    limit:'5mb'
}));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/communications', communicationRoute);

module.exports = app;