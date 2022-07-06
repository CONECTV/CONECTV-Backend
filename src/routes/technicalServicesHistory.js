const express = require('express');
const createTechnicalServiceHistory = require('../controllers/technicalServicesHistory');
const getTechnicalServicesHistory = require('../controllers/technicalServicesHistory');
const updateTechnicalServiceHistory = require('../controllers/technicalServicesHistory');

const router = express.Router();

router.post('/crear', createTechnicalServiceHistory.createTechnicalServiceHistory);
router.get('/obtener', getTechnicalServicesHistory.getTechnicalServicesHistory);
router.put('/actualizar', updateTechnicalServiceHistory.updateTechnicalServiceHistory);

module.exports = router;