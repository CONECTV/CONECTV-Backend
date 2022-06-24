const express = require('express');
const createTechnicalService = require('../controllers/technicalServices');
const getTechnicalServices = require('../controllers/technicalServices');

const router = express.Router();

router.post('/create', createTechnicalService.createTechnicalService);
router.get('/get', getTechnicalServices.getTechnicalServices);

module.exports = router;