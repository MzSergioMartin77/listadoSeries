
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeliSchema = Schema({
    titulo: String,
    descripcion: String,
    estadoUser: String,
    tipo: String,
    director:String,
    genero: [String]
});

module.exports = mongoose.model('obras', PeliSchema);