const express = require('express');
const createAvailableAbonos = require('../controllers/availableAbonos');
const getAvailableAbonos = require('../controllers/availableAbonos');

const router = express.Router();

router.post('/create', createAvailableAbonos.createAvailableAbonos);
router.get('/get', getAvailableAbonos.getAvailableAbonos);

module.exports = router;