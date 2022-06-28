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
const clientAccountStatus = require('./src/routes/clientAccountStatus')
const localitiesRoutes = require('./src/routes/localities')
const suscriptorDataRoutes = require('./src/routes/suscriptorData')
const instalationDataRoutes = require('./src/routes/instalationData')
const technicalServicesHistoryRoutes = require('./src/routes/technicalServicesHistory')
const technicalServiceStatusRoutes = require('./src/routes/technicalServiceStatus')
const technicalServicesRoutes = require('./src/routes/technicalServices')
const paymentHistoriesRoutes = require('./src/routes/paymentHistories')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/usuarios', userRoutes);
app.use('/tarifasCable', cableTariffRoutes);
app.use('/tarifasInternet', internetTariffRoutes);
app.use('/cargosDisponibles', availableChargesRoutes);
app.use('/bonosDisponibles', availableAbonosRoutes);
app.use('/estatusCuenta', accountStatusRoutes);
app.use('/estatusClientes', clientStatusesRoutes);
app.use('/serviciosDisponibles', availableServicesRoutes);
app.use('/localidades', localitiesRoutes);
app.use('/informacionSuscriptor', suscriptorDataRoutes);
app.use('/informacionInstalacion', instalationDataRoutes);
app.use('/historialServiciosTecnicos', technicalServicesHistoryRoutes);
app.use('/estatusServiciosTecnicos', technicalServiceStatusRoutes);
app.use('/serviciosTecnicos', technicalServicesRoutes);
app.use('/historialPagos', paymentHistoriesRoutes);
app.use('/statusCuentaCliente', clientAccountStatus);

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

