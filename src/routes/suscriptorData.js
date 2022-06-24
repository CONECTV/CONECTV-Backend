const express = require('express');
const createSuscriptorData = require('../controllers/suscriptorData');
const getSuscriptorsData = require('../controllers/suscriptorData');

const router = express.Router();

router.post('/create', createSuscriptorData.createSuscriptorData);
router.get('/get', getSuscriptorsData.getSuscriptorsData);

module.exports = router;