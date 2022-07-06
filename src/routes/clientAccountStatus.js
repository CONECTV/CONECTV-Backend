const express = require('express');
const createClientAcccountStatus = require('../controllers/clientAccountStatus');
const getClientsAcccountStatus = require('../controllers/clientAccountStatus');
const updateClientAcccountStatus = require('../controllers/clientAccountStatus');

const router = express.Router();

router.post('/crear', createClientAcccountStatus.createClientAcccountStatus);
router.get('/obtener', getClientsAcccountStatus.getClientsAcccountStatus);
router.put('/actualizar', updateClientAcccountStatus.updateClientAcccountStatus);

module.exports = router;