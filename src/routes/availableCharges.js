const express = require('express');
const createAvailableCharges = require('../controllers/availableCharges');
const getAvailableCharges = require('../controllers/availableCharges');

const router = express.Router();

router.post('/crear', createAvailableCharges.createAvailableCharges);
router.get('/obtener', getAvailableCharges.getAvailableCharges);

module.exports = router;