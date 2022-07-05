const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');

const TechnicalServiceStatus = sequelize.define('technicalServiceStatus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = TechnicalServiceStatus;