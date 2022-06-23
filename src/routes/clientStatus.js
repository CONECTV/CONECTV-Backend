const express = require('express');
const createClientStatus = require('../controllers/clientStatus');
const getClientStatuses = require('../controllers/clientStatus');

const router = express.Router();

router.post('/create', createClientStatus.createClientStatus);
router.get('/get', getClientStatuses.getClientStatuses);

module.exports = router;