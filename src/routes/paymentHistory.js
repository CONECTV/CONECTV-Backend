const express = require('express');
const createPaymentHistory = require('../controllers/paymentHistory');
const getPaymentHistory = require('../controllers/paymentHistory');
const updatePaymentHistory = require('../controllers/paymentHistory');

const router = express.Router();

router.post('/crear', createPaymentHistory.createPaymentHistory);
router.get('/obtener', getPaymentHistory.getPaymentHistory);
router.put('/actualizar', updatePaymentHistory.updatePaymentHistory);

module.exports = router;