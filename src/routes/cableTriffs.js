const express = require('express');
const createCableTariffs = require('../controllers/cableTariffs');
const getCableTariffs = require('../controllers/cableTariffs');

const router = express.Router();

router.post('/crear', createCableTariffs.createCableTariffs);
router.get('/obtener', getCableTariffs.getCableTariffs);

module.exports = router;