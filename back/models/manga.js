
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangaSchema = Schema({
    titulo: String,
    descripcion: String,
    estadoObra: String,
    estadoUser: String,
    tomos: Number,
    tipo: String,
    autor: String,
    genero: [String]
});

module.exports = mongoose.model('obras', MangaSchema);