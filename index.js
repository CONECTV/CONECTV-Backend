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
const availableAbonosRoutes = require('./src/routes/availableAbonos')
const accountStatusRoutes = require('./src/routes/accountStatus')
const clientStatusesRoutes = require('./src/routes/clientStatus')
const availableServicesRoutes = require('./src/routes/availableServices')
const localitiesRoutes = require('./src/routes/localities')
const suscriptorDataRoutes = require('./src/routes/suscriptorData')
const instalationDataRoutes = require('./src/routes/instalationData')
const technicalServicesHistoryRoutes = require('./src/routes/technicalServicesHistory')
const technicalServiceStatusRoutes = require('./src/routes/technicalServiceStatus')
const technicalServicesRoutes = require('./src/routes/technicalServices')
const paymentHistoriesRoutes = require('./src/routes/paymentHistories')
const clientAccountStatusRoutes = require('./src/routes/clientAccountStatus')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', userRoutes);
app.use('/cableTariffs', cableTariffRoutes);
app.use('/internetTariffs', internetTariffRoutes);
app.use('/availableCharges', availableChargesRoutes);
app.use('/availableAbonos', availableAbonosRoutes);
app.use('/accountStatus', accountStatusRoutes);
app.use('/clientStatuses', clientStatusesRoutes);
app.use('/availableServices', availableServicesRoutes);
app.use('/localities', localitiesRoutes);
app.use('/suscriptorData', suscriptorDataRoutes);
app.use('/instalationData', instalationDataRoutes);
app.use('/technicalServicesHistory', technicalServicesHistoryRoutes);
app.use('/technicalServiceStatus', technicalServiceStatusRoutes);
app.use('/technicalServices', technicalServicesRoutes);
app.use('/paymentHistories', paymentHistoriesRoutes);
app.use('/clientAccountStatus', clientAccountStatusRoutes);

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

