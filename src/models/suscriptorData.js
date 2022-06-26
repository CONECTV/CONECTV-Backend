const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const Localities = require('./localities');
const AvailableServices = require('./availableServices');
const ClientStatus = require('./clientStatus');

const SuscriptorData = sequelize.define('suscriptorData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contract: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastMaternalName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastPaternalName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    locality: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Localities,
            key: 'id'
        }
    },
    colony:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    street:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    houseNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    innerHouseNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    observations: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    urlLocation:{
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
    },
    contractedservice: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: AvailableServices,
            key: 'id'
        }
    },
    rfc:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    clientStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: ClientStatus,
            key: 'id'
        }
    }
});

module.exports = SuscriptorData;