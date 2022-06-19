const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const SuscriptorData = require('./suscriptorData');

const ClientStatus = sequelize.define('clientStatus', {
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
ClientStatus.hasOne(SuscriptorData);
SuscriptorData.belongsTo(ClientStatus);

module.exports = ClientStatus;