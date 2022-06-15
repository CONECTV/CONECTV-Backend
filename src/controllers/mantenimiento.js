import { db } from '../database/connection.js'

export const getLocations = async (req, res) => {
    //Obtener las localidades
    try {
        const [rows, fields] = await db.query('SELECT * FROM Localidades');
        //console.log(response);
        //console.log(fields)
        res.status(200).json(rows);

    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};

export const getColonias = async (req, res) => {
    //Obtener las colonias
    try {
        const [rows, fields] = await db.query('SELECT idColonias, c.colonia, l.localidad FROM Colonias c JOIN Localidades l ON l.idLocalidad = c.localidad');
        // console.log(response);
        res.status(200).json(rows);

    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};

export const getCalles = async (req, res) => {
    //Obtener las calles
    try {
        const [rows, fields] = await db.query(`
        SELECT c.idCalles,  c.calle, co.colonia, l.localidad
        FROM Calles c
        JOIN Colonias co ON co.idColonias = c.colonia
        JOIN Localidades l ON l.idLocalidad = c.localidad
        `);
        // console.log(response);
        res.status(200).json(rows);

    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};