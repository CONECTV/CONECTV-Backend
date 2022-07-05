const express = require('express');
const createAvailableAbonos = require('../controllers/availableAbonos');
const getAvailableAbonos = require('../controllers/availableAbonos');

const router = express.Router();

router.post('/crear', createAvailableAbonos.createAvailableAbonos);
router.get('/obtener', getAvailableAbonos.getAvailableAbonos);

module.exports = router;