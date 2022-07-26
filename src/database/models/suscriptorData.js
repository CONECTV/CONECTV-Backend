const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const ServiceSuscriptor = require('./serviceSuscriptor');

const SuscriptorData = sequelize.define('suscriptorData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customerName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    telephone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    emailAddress: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

SuscriptorData.hasMany(ServiceSuscriptor);
ServiceSuscriptor.hasOne(SuscriptorData);

module.exports = SuscriptorData;