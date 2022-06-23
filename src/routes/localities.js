const express = require('express');
const createLocality = require('../controllers/localities');
const getLocalities = require('../controllers/localities');

const router = express.Router();

router.post('/create', createLocality.createLocality);
router.get('/get', getLocalities.getLocalities);

module.exports = router;