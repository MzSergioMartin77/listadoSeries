
const express = require('express');
const serieController = require('../controlers/serieControler');

const router = express.Router();

router.get('/home', serieController.home);
router.get('/obra', serieController.home);
router.post('/add-obra', serieController.saveSerie);
//router.get('/obra/:id', serieController.getID);
router.get('/obras/tipo=:tipo', serieController.getTipo);
router.get('/obra/:titulo', serieController.getTitulo);
router.get('/obras/genero=:genero', serieController.getGenero);

module.exports = router;