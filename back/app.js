'use strict'

//configuración express

const express = require('express');
const bodyParse = require('body-parser');

const serie_routes = require('./routes/serieRoutes');
const cors = require('cors');

//const config = require('./config');

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:4200", //servidor que deseas que consuma
                    credentials: true
                }
            ]
        }
    }
}

var app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json()); //para pasar lo que se pase a json
app.use(cors(
    config.application.cors.server
  ));
//rutas
app.use('/', serie_routes);

//exportar
module.exports = app;
