'use strict';

const express = require('express');
const rota = express.Router();
const controller = require('../controllers/communication-controller');

rota.post('/postSms',controller.postSms);

module.exports = rota;