'use strict'

//configuración express

const express = require('express');
const bodyParse = require('body-parser');

const serie_routes = require('./routes/serieRoutes');

const app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json()); //para pasar lo que se pase a json

//rutas
app.use('/', serie_routes);

//exportar
module.exports = app;
