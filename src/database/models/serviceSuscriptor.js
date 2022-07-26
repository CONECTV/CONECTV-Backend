const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');

const ServiceSuscriptor = sequelize.define('serviceSuscriptor', {
    contract: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
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
    rfc:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    rfcAddress: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = SuscriptorData;