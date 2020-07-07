
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SerieSchema = Schema({
    titulo: String,
    descripcion: String,
    estadoObra: String,
    estadoUser: String,
    temporadas: Number,
    tipo: String,
    tomos:Number,
    autor:String,
    director:String,
    estudio:String,
    plataforma:String,
    genero: [String]
});

module.exports = mongoose.model('obras', SerieSchema);