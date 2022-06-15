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
    idSuscriptor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: SuscriptorData,
            key: 'id'
        }
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

module.exports = PaymentHistory;