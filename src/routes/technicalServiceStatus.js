const express = require('express');
const createTechnicalServiceStatus = require('../controllers/technicalServiceStatus');
const getTechnicalServicesStatus = require('../controllers/technicalServiceStatus');
const updateTechnicalServiceStatus = require('../controllers/technicalServiceStatus');

const router = express.Router();

router.post('/crear', createTechnicalServiceStatus.createTechnicalServiceStatus);
router.get('/obtener', getTechnicalServicesStatus.getTechnicalServicesStatus);
router.put('/actualizar', updateTechnicalServiceStatus.updateTechnicalServiceStatus);

module.exports = router;