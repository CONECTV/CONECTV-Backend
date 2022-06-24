const express = require('express');
const createTechnicalServiceHistory = require('../controllers/technicalServicesHistory');
const getTechnicalServicesHistory = require('../controllers/technicalServicesHistory');

const router = express.Router();

router.post('/create', createTechnicalServiceHistory.createTechnicalServiceHistory);
router.get('/get', getTechnicalServicesHistory.getTechnicalServicesHistory);

module.exports = router;