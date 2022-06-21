const sequelize = require('./src/database/configs/db_connection')
const hostname = '127.0.0.1';
const port = 8000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const userRoutes = require('./src/routes/users')

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/users', userRoutes);


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
  await sequelize.sync({ alter: true });
}
ModelCreation()

module.exports.sequelize = sequelize

