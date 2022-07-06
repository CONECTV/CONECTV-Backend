const express = require('express');
const createCableTariffs = require('../controllers/cableTariffs');
const getCableTariffs = require('../controllers/cableTariffs');
const updateCableTariffs = require('../controllers/cableTariffs');

const router = express.Router();

router.post('/crear', createCableTariffs.createCableTariffs);
router.get('/obtener', getCableTariffs.getCableTariffs);
router.put('/actualizar', updateCableTariffs.updateCableTariffs);

module.exports = router;