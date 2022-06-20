const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const AccountStatus = require('./accountStatus');
const SuscriptorData = require('./suscriptorData');
const TechnicalServices = require('./technicalServices');
const TechnicalServiceStatus = require('./technicalServiceStatus');

const TechnicalServicesHistory = sequelize.define('technicalServicesHistory', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    commentary: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    startDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate:{
        type: Sequelize.DATE,
    }
});


SuscriptorData.hasMany(TechnicalServicesHistory);
TechnicalServicesHistory.belongsTo(SuscriptorData);

TechnicalServicesHistory.hasMany(TechnicalServices)
TechnicalServices.belongsTo(TechnicalServicesHistory)

TechnicalServicesHistory.hasMany(TechnicalServiceStatus)
TechnicalServiceStatus.belongsTo(TechnicalServicesHistory)

module.exports = TechnicalServicesHistory;