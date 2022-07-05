const express = require('express');
const createAvailableService = require('../controllers/availableServices');
const getAvailableServices = require('../controllers/availableServices');

const router = express.Router();

router.post('/crear', createAvailableService.createAvailableService);
router.get('/obtener', getAvailableServices.getAvailableServices);

module.exports = router;