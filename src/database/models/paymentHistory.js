const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const ServiceSuscriptor = require('./serviceSuscriptor');

const PaymentHistory = sequelize.define('paymentHistory', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    paymentDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

ServiceSuscriptor.hasMany(PaymentHistory);
PaymentHistory.belongsTo(ServiceSuscriptor);

module.exports = PaymentHistory;