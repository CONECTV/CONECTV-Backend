const express = require('express');
const createLocality = require('../controllers/localities');
const getLocalities = require('../controllers/localities');
const updateLocality = require('../controllers/localities');

const router = express.Router();

router.post('/crear', createLocality.createLocality);
router.get('/obtener', getLocalities.getLocalities);
router.put('/actualizar', updateLocality.updateLocality);

module.exports = router;