const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');
const SuscriptorData = require('./suscriptorData');

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

SuscriptorData.hasMany(PaymentHistory);
PaymentHistory.belongsTo(SuscriptorData);


module.exports = PaymentHistory;