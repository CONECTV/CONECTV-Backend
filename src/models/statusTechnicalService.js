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
    idSuscriptor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: SuscriptorData,
            key: 'id'
        }
    },
    idTechnicalService:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: TechnicalServices,
            key: 'id'
        }
    },
    commentary: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    statusTechnicalService: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: TechnicalServiceStatus,
            key: 'id'
        }
    },
    startDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate:{
        type: Sequelize.DATE,
    }
});

module.exports = TechnicalServicesHistory;