const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const AccountStatus = require('./accountStatus');
const SuscriptorData = require('./suscriptorData');

const ClientAccountStatus = sequelize.define('clientAccountStatus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

SuscriptorData.hasOne(ClientAccountStatus)
ClientAccountStatus.belongsTo(SuscriptorData)

AccountStatus.hasMany(ClientAccountStatus);
ClientAccountStatus.belongsTo(AccountStatus);

module.exports = ClientAccountStatus;