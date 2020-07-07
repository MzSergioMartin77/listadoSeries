
const express = require('express');
const serieController = require('../controlers/serieControler');

const router = express.Router();

router.get('/home', serieController.home);
router.get('/obra', serieController.home);
router.post('/add-obra', serieController.saveSerie);
router.get('/serie/:id', serieController.getSerie);

module.exports = router;