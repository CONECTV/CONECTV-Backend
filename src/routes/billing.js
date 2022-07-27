const express = require('express');
const createBilling = require('../controllers/billing');
const getBillings = require('../controllers/billing');
const updateBilling = require('../controllers/billing');

const router = express.Router();

router.post('/crear', createBilling.createBilling);
router.get('/obtener', getBillings.getBillings);
router.put('/actualizar', updateBilling.updateBilling);

module.exports = router;