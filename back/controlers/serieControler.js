
const Serie = require('../models/serie');


const controller = {

    home: function(req, res){
        res.status(200).send({
            message: "pagina home"
        });
    },

    add: function(req, res){
        res.status(200).send({
            message: "pagina add"
        });
    },

    obra: function(req, res){
        res.status(200).send({
            message: "pagina de una obra"
        });
    },

    update: function(req, res){
        res.status(200).send({
            message: "pagina update"
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

    getSerie: function(req, res){
        const serieId = req.params.id;

        if(serieId == null){
            return res.status(404).send({
                message: "No existe ningúna serie con es id"
            });
        }

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
    }

};

module.exports = controller;