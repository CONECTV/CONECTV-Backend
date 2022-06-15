//ALL HANDLERS FROM OUR ROUTES
import { db } from '../database/connection.js'

export const getUsuarios = async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM DatosSuscriptor');
        res.status(200).json(rows);
    } catch (error) {
        console.log('Ocurrio un error en el get')
    }

    
};

export const createUsuario = (req, res) => {
    res.send('Nuevo user');
};
