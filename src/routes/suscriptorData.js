const express = require('express');
const createSuscriptorData = require('../controllers/suscriptorData');
const getSuscriptorsData = require('../controllers/suscriptorData');
const updateSuscriptorData = require('../controllers/suscriptorData');
const getSuscriptorsDataSearchBar = require('../controllers/suscriptorData');
const getSuscriptorData = require('../controllers/suscriptorData');

const router = express.Router();

router.post('/crear', createSuscriptorData.createSuscriptorData);
router.get('/obtener', getSuscriptorsData.getSuscriptorsData);
router.put('/actualizar', updateSuscriptorData.updateSuscriptorData);
router.post('/search', getSuscriptorsDataSearchBar.getSuscriptorsDataSearchBar);
router.get('/searchContrato', getSuscriptorData.getSuscriptorData);

module.exports = router;