import express from 'express';

import { getLogin, postLogin } from '../controllers/login.js';

const router = express.Router();

router.get('/prueba', getLogin)
router.post('/insertar', postLogin)


export default router;