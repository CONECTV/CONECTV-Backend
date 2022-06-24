const express = require('express');
const createTechnicalServiceStatus = require('../controllers/technicalServiceStatus');
const getTechnicalServicesStatus = require('../controllers/technicalServiceStatus');

const router = express.Router();

router.post('/create', createTechnicalServiceStatus.createTechnicalServiceStatus);
router.get('/get', getTechnicalServicesStatus.getTechnicalServicesStatus);

module.exports = router;