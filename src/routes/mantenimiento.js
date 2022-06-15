import express from 'express';

import { getLocations, getColonias, getCalles } from '../controllers/mantenimiento.js';

const router = express.Router();

//We added the prefix of users

//localhost:5000/users
router.get('/localidades', getLocations);
router.get('/colonias', getColonias);
router.get('/calles', getCalles);


export default router;
