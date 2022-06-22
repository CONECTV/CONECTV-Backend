const express = require('express');
const createCableTariffs = require('../controllers/cableTariffs');
const getCableTariffs = require('../controllers/cableTariffs');

const router = express.Router();

router.post('/create', createCableTariffs.createCableTariffs);
router.get('/get', getCableTariffs.getCableTariffs);

module.exports = router;