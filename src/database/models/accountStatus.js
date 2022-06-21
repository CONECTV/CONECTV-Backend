const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');

const AccountStatus = sequelize.define('accountStatus', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = AccountStatus;