const Sequelize = require('sequelize');
// Client account status
const sequelize = require('../configs/connection');
const AccountStatus = require('./accountStatus');
const ServiceSuscriptor = require('./serviceSuscriptor');


//TODO  CHANGE NAME TO BILLING
const Billing = sequelize.define('billing', {
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

ServiceSuscriptor.hasMany(Billing)
Billing.belongsTo(ServiceSuscriptor)

AccountStatus.hasMany(Billing);
Billing.hasOne(AccountStatus);

module.exports = Billing;