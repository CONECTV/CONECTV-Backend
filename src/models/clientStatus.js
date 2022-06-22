const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');

const ClientStatus = sequelize.define('clientStatus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    state: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

module.exports = ClientStatus;