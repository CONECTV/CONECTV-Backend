const sequelize = require('./src/database/configs/db_connection')
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const express = require('express');
const app = express()

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


var models = [
  'user',
  'technicalServiceStatus',
  'technicalServicesHistory',
  'technicalServices',
  'suscriptorData',
  'paymentHistory',
  'localities',
  'internetTariffs',
  'instalationData',
  'clientStatus',
  'clientAcccountStatus',
  'cableTariffs',
  'availableServices',
  'availableCharges',
  'availableAbono',
  'accountStatus'
];

models.forEach(function (model) {
  module.exports[model] = require('./src/database/models' + '/' + model);
})

async function ModelCreation () {
  await sequelize.sync({ force: true });
}
ModelCreation()

module.exports.sequelize = sequelize

