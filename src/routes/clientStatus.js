const express = require('express');
const createClientStatus = require('../controllers/clientStatus');
const getClientStatuses = require('../controllers/clientStatus');

const router = express.Router();

router.post('/crear', createClientStatus.createClientStatus);
router.get('/obtener', getClientStatuses.getClientStatuses);

module.exports = router;