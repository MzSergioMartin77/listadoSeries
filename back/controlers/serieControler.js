
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

    getID: function(req, res){
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
    },

    getTipo: function(req, res){
        const tipoparam = req.params.tipo;

        if(tipoparam == null){
            return res.status(404).send({
                message: "No existe ese tipo"
            });
        }

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

        if(tituloparam == null){
            return res.status(404).send({
                message: "No existe ningúna obra con ese título"
            });
        }

        Serie.find({titulo:tituloparam}, (err, serie) => {
            if(err){
                return res.status(500).send({
                    message: "Error al mostrar los datos"
                });
            }
            if(!serie){
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

        if(generoparam == null){
            return res.status(404).send({
                message: "No existe ningúna obra con este género"
            });
        }

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
    }

};

module.exports = controller;