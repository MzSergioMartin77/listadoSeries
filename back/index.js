'use strict'

//Conexión con la base de datos en mongo
const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/listadoSeries', {useNewUrlParser: true})
    .then( () => {
        console.log("Conexión realizada con éxito");

        app.listen(port, () => {
            console.log('Servidor funcionando en el localhost:3700');
        })

    }).catch(err => console.log('error no se pudo realizar la conexión'));