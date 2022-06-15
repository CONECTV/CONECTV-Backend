import express from 'express';

import { getUsuarios, createUsuario } from '../controllers/users.js';

const router = express.Router();

//We added the prefix of users

//localhost:5000/users
router.get('/suscriptores', getUsuarios);

router.post('/suscriptor', createUsuario);

export default router;