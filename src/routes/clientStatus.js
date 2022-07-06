const express = require('express');
const createClientStatus = require('../controllers/clientStatus');
const getClientStatuses = require('../controllers/clientStatus');
const updateClientStatus = require('../controllers/clientStatus');

const router = express.Router();

router.post('/crear', createClientStatus.createClientStatus);
router.get('/obtener', getClientStatuses.getClientStatuses);
router.put('/actualizar', updateClientStatus.updateClientStatus);

module.exports = router;