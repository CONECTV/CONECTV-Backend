const express = require('express');
const createPaymentHistory = require('../controllers/paymentHistories');
const getPaymentHistories = require('../controllers/paymentHistories');

const router = express.Router();

router.post('/create', createPaymentHistory.createPaymentHistory);
router.get('/get', getPaymentHistories.getPaymentHistories);

module.exports = router;