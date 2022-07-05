const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');

const CableTariffs = sequelize.define('cableTariffs', {
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

module.exports = CableTariffs;