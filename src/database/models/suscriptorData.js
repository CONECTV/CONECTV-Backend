const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const Localities = require('./localities');

const SuscriptorData = sequelize.define('suscriptorData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contract: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    customerName:{
        type: Sequelize.TEXT,
        allowNull: false
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
    rfc:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    rfcAddress: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// * Relationship between SuscriptorData and Localities
Localities.hasMany(SuscriptorData);
SuscriptorData.belongsTo(Localities);

module.exports = SuscriptorData;