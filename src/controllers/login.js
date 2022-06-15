import { db } from '../database/connection.js'

export const getLogin = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM Login');
        res.status(200).json(response);

    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};

export const postLogin = async (req, res) => {
    try {
        var post = { Usuario: 'Wil', Contraseña: '12345' }
        response = await db.query('INSERT INTO Login(´Usuario´, ´Contraseña´) VALUES (´Wil´, ´123´)');
        res.status(201).send('Insertado correctamente'); 
    } catch (error) {
        console.log(error)
    }
}