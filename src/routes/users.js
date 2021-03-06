const express = require('express');
const getUsuarios = require('../controllers/users');
const createUser = require('../controllers/users');

const router = express.Router();

//localhost:5000/users
router.post('/create', createUser.createUser);
router.get('/get', getUsuarios.getUser);

module.exports = router;