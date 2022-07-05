const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');

const AvailableCharges = sequelize.define('availableCharges', {
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

module.exports = AvailableCharges;