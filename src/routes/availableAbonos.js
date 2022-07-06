const express = require('express');
const createAvailableAbono = require('../controllers/availableAbonos');
const getAvailableAbonos = require('../controllers/availableAbonos');
const updateAvailableAbono = require('../controllers/availableAbonos');

const router = express.Router();

router.post('/crear', createAvailableAbono.createAvailableAbono);
router.get('/obtener', getAvailableAbonos.getAvailableAbonos);
router.put('/actualizar', updateAvailableAbono.updateAvailableAbono);

module.exports = router;