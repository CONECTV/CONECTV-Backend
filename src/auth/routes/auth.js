const express = require('express');
const login = require('../controllers/login');
const signup = require('../controllers/signup');

const router = express.Router();

router.post('/login', login.login);
router.post('/signup', signup.signup);

module.exports = router;