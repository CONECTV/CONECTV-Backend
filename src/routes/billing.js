const express = require('express');
const createBillingStatus = require('../controllers/billing');
const getBillingStatus = require('../controllers/billing');
const updateBillingStatus = require('../controllers/billing');

const router = express.Router();

router.post('/crear', createBillingStatus.createBillingStatus);
router.get('/obtener', getBillingStatus.getBillingStatus);
router.put('/actualizar', updateBillingStatus.updateBillingStatus);

module.exports = router;