const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const ServiceSuscriptor = require('./serviceSuscriptor');

const ServiceStatus = sequelize.define('serviceStatus', {
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

// * Relationship between SuscriptorData and ClientStatus
ServiceStatus.hasOne(ServiceSuscriptor);
ServiceSuscriptor.belongsTo(ServiceStatus);

module.exports = ServiceStatus;