require('dotenv').config()
const { Sequelize } = require('sequelize');

const USER=process.env.MYSQL_USER
const HOST=process.env.MYSQL_HOST
const DATABASE=process.env.MYSQL_DATABASE
const PASSWORD=process.env.MYSQL_ROOT_PASSWORD
const PORT=process.env.MYSQL_PORT


const db_string =`mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
const sequelize = new Sequelize(db_string)

async function TestConecction() {
	try {
		await sequelize.authenticate();
		console.log('Connection to db has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}
TestConecction()
module.exports = sequelize