const express = require('express');
const createAvailableCharge = require('../controllers/availableCharges');
const getAvailableCharges = require('../controllers/availableCharges');
const updateAvailableCharge = require('../controllers/availableCharges');

const router = express.Router();

router.post('/crear', createAvailableCharge.createAvailableCharge);
router.get('/obtener', getAvailableCharges.getAvailableCharges);
router.put('/actualizar', updateAvailableCharge.updateAvailableCharge);

module.exports = router;