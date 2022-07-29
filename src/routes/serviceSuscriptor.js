const express = require('express');
const createServiceSuscriptor = require('../controllers/serviceSuscriptor');
const getServicesSuscriptor = require('../controllers/serviceSuscriptor');
const updateServiceSuscriptor = require('../controllers/serviceSuscriptor');

const router = express.Router();

router.post('/crear', createServiceSuscriptor.createServiceSuscriptor);
router.get('/obtener', getServicesSuscriptor.getServicesSuscriptor);
router.put('/actualizar', updateServiceSuscriptor.updateServiceSuscriptor);

module.exports = router;