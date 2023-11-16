const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

app.set('port', process.env.PORT || 3333);

const crudRotas = require('./routes/rotas');

app.use('/api', crudRotas);

module.exports = app;
