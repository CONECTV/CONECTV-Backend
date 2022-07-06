const express = require('express');
const createTechnicalService = require('../controllers/technicalServices');
const getTechnicalServices = require('../controllers/technicalServices');
const updateTechnicalServices = require('../controllers/technicalServices');

const router = express.Router();

router.post('/crear', createTechnicalService.createTechnicalService);
router.get('/obtener', getTechnicalServices.getTechnicalServices);
router.put('/actualizar', updateTechnicalServices.updateTechnicalServices);

module.exports = router;