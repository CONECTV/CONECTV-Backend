const express = require('express');
const createInternetTariffs = require('../controllers/internetTariffs');
const getInternetTariffs = require('../controllers/internetTariffs');

const router = express.Router();

router.post('/crear', createInternetTariffs.createInternetTariffs);
router.get('/obtener', getInternetTariffs.getInternetTariffs);

module.exports = router;