const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');

const AvailableServices = sequelize.define('availableServices', {
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
    monthlyPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = AvailableServices;