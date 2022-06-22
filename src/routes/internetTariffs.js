const express = require('express');
const createInternetTariffs = require('../controllers/internetTariffs');
const getInternetTariffs = require('../controllers/internetTariffs');

const router = express.Router();

router.post('/create', createInternetTariffs.createInternetTariffs);
router.get('/get', getInternetTariffs.getInternetTariffs);

module.exports = router;