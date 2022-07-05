const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const SuscriptorData = require('./suscriptorData');

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

// * Relationship between SuscriptorData and AvailableServices
AvailableServices.hasOne(SuscriptorData);
SuscriptorData.belongsTo(AvailableServices);

module.exports = AvailableServices;