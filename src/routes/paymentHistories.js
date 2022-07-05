const express = require('express');
const createPaymentHistory = require('../controllers/paymentHistories');
const getPaymentHistories = require('../controllers/paymentHistories');

const router = express.Router();

router.post('/crear', createPaymentHistory.createPaymentHistory);
router.get('/obtener', getPaymentHistories.getPaymentHistories);

module.exports = router;