const express = require('express');
const getUsuarios = require('../controllers/users');
const createUsuario = require('../controllers/users');
const createUser = require('../controllers/users');

const router = express.Router();

//We added the prefix of users

//localhost:5000/users

router.get('/create', createUser.createUser);
router.get('/get', getUsuarios.getUser);

router.post('/suscriptor', createUsuario.createUsuario);

module.exports = router;