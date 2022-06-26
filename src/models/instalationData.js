const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const SuscriptorData = require('./suscriptorData');

const InstalationData = sequelize.define('instalationData', {
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

module.exports = InstalationData;