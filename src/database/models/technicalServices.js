const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');

const TechnicalServices = sequelize.define('technicalServices', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = TechnicalServices;