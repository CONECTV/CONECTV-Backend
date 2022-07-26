const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const AccountStatus = require('./accountStatus');
const SuscriptorData = require('./suscriptorData');

//TODO  CHANGE NAME TO BILLING
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