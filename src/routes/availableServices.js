const express = require('express');
const createAvailableService = require('../controllers/availableServices');
const getAvailableServices = require('../controllers/availableServices');

const router = express.Router();

router.post('/create', createAvailableService.createAvailableService);
router.get('/get', getAvailableServices.getAvailableServices);

module.exports = router;