const express = require('express');
const createAvailableCharges = require('../controllers/availableCharges');
const getAvailableCharges = require('../controllers/availableCharges');

const router = express.Router();

router.post('/create', createAvailableCharges.createAvailableCharges);
router.get('/get', getAvailableCharges.getAvailableCharges);

module.exports = router;