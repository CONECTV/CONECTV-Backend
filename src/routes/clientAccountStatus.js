const express = require('express');
const createClientAcccountStatus = require('../controllers/clientAccountStatus');
const getClientsAcccountStatus = require('../controllers/clientAccountStatus');

const router = express.Router();

router.post('/create', createClientAcccountStatus.createClientAcccountStatus);
router.get('/get', getClientsAcccountStatus.getClientsAcccountStatus);

module.exports = router;