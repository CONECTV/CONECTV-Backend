const Sequelize = require('sequelize');

const sequelize = require('../configs/db_connection');

const Localities = sequelize.define('localities', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    locality: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cuttingDat: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    internet: {
        type: Sequelize.BOOLEAN,
        ALLOW_NULL: false
    }
});

module.exports = Localities;