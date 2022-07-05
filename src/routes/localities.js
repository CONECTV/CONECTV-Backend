const express = require('express');
const createLocality = require('../controllers/localities');
const getLocalities = require('../controllers/localities');

const router = express.Router();

router.post('/crear', createLocality.createLocality);
router.get('/obtener', getLocalities.getLocalities);

module.exports = router;