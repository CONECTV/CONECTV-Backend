const express = require('express');
const createCableTariff = require('../controllers/cableTariffs');
const getCableTariffs = require('../controllers/cableTariffs');
const updateCableTariff = require('../controllers/cableTariffs');
const deleteCableTariff = require('../controllers/cableTariffs');

const router = express.Router();

router.post('/crear', createCableTariff.createCableTariff);
router.get('/obtener', getCableTariffs.getCableTariffs);
router.put('/actualizar', updateCableTariff.updateCableTariff);
router.delete('/eliminar', deleteCableTariff.deleteCableTariff);

module.exports = router;