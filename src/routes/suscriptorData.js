const express = require('express');
const createSuscriptorData = require('../controllers/suscriptorData');
const getSuscriptorsData = require('../controllers/suscriptorData');

const router = express.Router();

router.post('/crear', createSuscriptorData.createSuscriptorData);
router.get('/obtener', getSuscriptorsData.getSuscriptorsData);

module.exports = router;