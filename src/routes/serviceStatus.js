const express = require('express');
const createServiceStatus = require('../controllers/serviceStatus');
const getServiceStatuses = require('../controllers/serviceStatus');
const updateServiceStatus = require('../controllers/serviceStatus');

const router = express.Router();

router.post('/crear', createServiceStatus.createServiceStatus);
router.get('/obtener', getServiceStatuses.getServiceStatuses);
router.put('/actualizar', updateServiceStatus.updateServiceStatus);

module.exports = router;