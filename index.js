const sequelize = require('./src/database/configs/db_connection')
const hostname = '127.0.0.1';
const port = 8000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const userRoutes = require('./src/routes/users')
const cableTariffRoutes = require('./src/routes/cableTriffs')
const internetTariffRoutes = require('./src/routes/internetTariffs')
const availableChargesRoutes = require('./src/routes/availableCharges')
const availableAbonos = require('./src/routes/availableAbonos')
const accountStatus = require('./src/routes/accountStatus')
const clientStatuses = require('./src/routes/clientStatus')
const availableServices = require('./src/routes/availableServices')
const localities = require('./src/routes/localities')
const suscriptorData = require('./src/routes/suscriptorData')
const instalationData = require('./src/routes/instalationData')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', userRoutes);
app.use('/cableTariffs', cableTariffRoutes);
app.use('/internetTariffs', internetTariffRoutes);
app.use('/availableCharges', availableChargesRoutes);
app.use('/availableAbonos', availableAbonos);
app.use('/accountStatus', accountStatus);
app.use('/clientStatuses', clientStatuses);
app.use('/availableServices', availableServices);
app.use('/localities', localities);
app.use('/suscriptorData', suscriptorData);
app.use('/instalationData', instalationData);

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

