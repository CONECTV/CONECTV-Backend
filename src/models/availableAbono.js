const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');

const AvailableAbono = sequelize.define('availableAbono', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = AvailableAbono;