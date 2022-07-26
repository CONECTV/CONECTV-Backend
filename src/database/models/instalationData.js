const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const ServiceSuscriptor = require('./serviceSuscriptor');

const InstalationData = sequelize.define('instalationData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    instalationDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    poleNumber: {
        type: Sequelize.INTEGER,
    },
    napNumber: {
        type: Sequelize.INTEGER,
    },
    napOutput: {
        type: Sequelize.INTEGER,
    },
    macAddress: {
        type: Sequelize.TEXT,
    },
    ipAddress: {
        type: Sequelize.TEXT,
    },
    numberTelevisions:{
        type: Sequelize.INTEGER,
    }
});

ServiceSuscriptor.hasOne(InstalationData)
InstalationData.belongsTo(ServiceSuscriptor)

module.exports = InstalationData;