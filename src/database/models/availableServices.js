const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const ServiceSuscriptor = require('./serviceSuscriptor');

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

// * Relationship between ServiceSuscriptor and AvailableServices
AvailableServices.hasOne(ServiceSuscriptor);
ServiceSuscriptor.belongsTo(AvailableServices);

module.exports = AvailableServices;