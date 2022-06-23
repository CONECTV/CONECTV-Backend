const express = require('express');
const createAccountStatus = require('../controllers/accountStatus');
const getAccountStatuses = require('../controllers/accountStatus');

const router = express.Router();

router.post('/create', createAccountStatus.createAccountStatus);
router.get('/get', getAccountStatuses.getAccountStatuses);

module.exports = router;