require('dotenv').config()
const { Sequelize } = require('sequelize');

const HOST = process.env.MYSQL_HOST
const DATABASE = process.env.MYSQL_DATABASE
const PASSWORD = process.env.MYSQL_ROOT_PASSWORD
const PORT = process.env.MYSQL_PORT

class Connection {
    db_string = `mysql://root:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`

    constructor() {
        this.sequelize = new Sequelize(this.db_string)
        this.testConnection
    }
    static async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection established!')
        } catch (e) {
            console.error('Unable to connect to the database: ', e)
        }
    }
}

const sequelize = new Connection().sequelize;
Object.freeze( sequelize )

module.exports = sequelize 