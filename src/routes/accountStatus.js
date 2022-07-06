const express = require('express');
const createAccountStatus = require('../controllers/accountStatus');
const getAccountStatuses = require('../controllers/accountStatus');
const updateAccountStatus = require('../controllers/accountStatus');

const router = express.Router();

router.post('/crear', createAccountStatus.createAccountStatus);
router.get('/obtener', getAccountStatuses.getAccountStatuses);
router.put('/actualizar', updateAccountStatus.updateAccountStatus);

module.exports = router;