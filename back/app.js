'use strict'

//configuración express

const express = require('express');
const bodyParse = require('body-parser');

let app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json()); //para pasar lo que se pase a json

//rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>INICIO</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send(
        "Prueba funcionando jejeje :)"
    );
});

//exportar
module.exports = app;
