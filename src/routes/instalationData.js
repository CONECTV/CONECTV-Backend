const express = require('express');
const createInstalationData = require('../controllers/instalationData');
const getInstalationData = require('../controllers/instalationData');
const updateInstalationData = require('../controllers/instalationData');

const router = express.Router();

router.post('/crear', createInstalationData.createInstalationData);
router.get('/obtener', getInstalationData.getInstalationData);
router.put('/actualizar', updateInstalationData.updateInstalationData);

module.exports = router;