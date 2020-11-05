
const Serie = require('../models/serie');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const controller = {

    home: function(req, res){
        res.status(200).send({
            message: "pagina home"
        });
    },

    saveSerie: function(req, res){
        const serie = new Serie();

        const params = req.body;
        serie.titulo = params.titulo;
        serie.descripcion = params.descripcion;
        serie.estadoObra = params.estadoObra;
        serie.estadoUser = params.estadoUser;
        serie.temporadas = params.temporadas;
        serie.tomos = params.tomos;
        serie.tipo = params.tipo;
        serie.autor = params.autor;
        serie.estudio = params.estudio
        serie.director = params.director;
        serie.plataforma = params.plataforma;
        serie.genero = params.genero;

        serie.save((err, serieStored) => {
            if(err){
                return res.status(500).send({
                    message: "Error al guardar en la base de datos"
                });
            }
            if(!serieStored){
                return res.status(404).send({
                    message: "No se ha podido guardar la nueva serie"
                });
            }

            return res.status(200).send({
                serie: serieStored
            });
        });
    },

    getID: function(req, res){
        const serieId = req.params.id;

        Serie.findById(serieId, (err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serie){
                return res.status(404).send({
                    message: "No existe ningúna serie con es id"
                });
            }
            return res.status(200).send({
                serie
            });
        });
    },

    getTipo: function(req, res){
        const tipoparam = req.params.tipo;

        Serie.find({tipo:tipoparam}, (err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serie){
                return res.status(404).send({
                    message: "No existe ningúna serie de este tipo"
                });
            }
            return res.status(200).send({
                serie
            });
        }).sort("titulo");
    },

    getTitulo: function(req, res){
        const tituloparam = req.params.titulo;

        Serie.find({titulo:tituloparam}, (err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(serie == ""){
                return res.status(404).send({
                    message: "No existe ningúna serie con este título"
                });
            }
            return res.status(200).send({
                serie
            });
        });
    },

    getGenero: function(req, res){
        const generoparam = req.params.genero;

        Serie.find({genero:generoparam}, (err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serie){
                return res.status(404).send({
                    message: "No existe ningúna serie con este género"
                });
            }
            return res.status(200).send({
                serie
            });
        }).sort("titulo");
    },
    
    getSeries: function(req, res){
        
        Serie.find({}).sort("titulo").exec((err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serie){
                return res.status(404).send({
                    message: "No existe ningúna serie con este género"
                });
            }
            return res.status(200).send({
                serie
            });
        });
    },

    updateSerie: function(req, res){
        const serieId = req.params.id;
        const update = req.body;

        Serie.findOneAndUpdate({_id:serieId}, update, {new:true}, (err, serieUpdated) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serieUpdated){
                return res.status(404).send({
                    message: "No existe ningúna serie con este id"
                });
            }
            return res.status(200).send({
                serie : serieUpdated
            });
        })
    },

    deleteSerie: function(req, res){
        const serieId = req.params.id;

        Serie.findOneAndDelete({_id:serieId}, (err, serieDeleted) => {
            if(err){
                return res.status(500).send({
                    message: "Error al borrar la serie"
                });
            }
            if(!serieDeleted){
                return res.status(404).send({
                    message: "No se pude eliminar esa serie"
                });
            }
            return res.status(200).send({
                serie : serieDeleted
            });
        })
    }

};

module.exports = controller;