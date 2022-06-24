const express = require('express');
const createInstalationData = require('../controllers/instalationData');
const getInstalationData = require('../controllers/instalationData');

const router = express.Router();

router.post('/create', createInstalationData.createInstalationData);
router.get('/get', getInstalationData.getInstalationData);

module.exports = router;