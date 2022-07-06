const express = require('express');
const createInternetTariff = require('../controllers/internetTariffs');
const getInternetTariffs = require('../controllers/internetTariffs');
const updateInternetTariff = require('../controllers/internetTariffs');

const router = express.Router();

router.post('/crear', createInternetTariff.createInternetTariff);
router.get('/obtener', getInternetTariffs.getInternetTariffs);
router.put('/actualizar', updateInternetTariff.updateInternetTariff);

module.exports = router;