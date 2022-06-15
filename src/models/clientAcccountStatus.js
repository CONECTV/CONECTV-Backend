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
    idSuscriptor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: SuscriptorData,
            key: 'id'
        }
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: AccountStatus,
            key: 'id'
        }
    }
});

module.exports = ClientAccountStatus;