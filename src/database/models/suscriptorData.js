const Sequelize = require('sequelize');

const sequelize = require('../configs/connection');
const Localities = require('./localities');

const SuscriptorData = sequelize.define('suscriptorData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customerName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    telephone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    emailAddress: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// * Relationship between SuscriptorData and Localities
Localities.hasMany(SuscriptorData);
SuscriptorData.belongsTo(Localities);

module.exports = SuscriptorData;