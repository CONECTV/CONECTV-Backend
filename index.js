const sequelize = require('./src/database/configs/connection')
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
const authRoutes = require('./src/auth/routes/auth')
const verifyToken = require('./src/auth/middleware/validateToken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/usuarios', verifyToken, userRoutes);
app.use('/tarifasCable', verifyToken, cableTariffRoutes);
app.use('/tarifasInternet', verifyToken, internetTariffRoutes);
app.use('/cargosDisponibles', verifyToken, availableChargesRoutes);
app.use('/bonosDisponibles', verifyToken, availableAbonosRoutes);
app.use('/estatusCuenta',verifyToken, accountStatusRoutes);
app.use('/estatusClientes',verifyToken, clientStatusesRoutes);
app.use('/serviciosDisponibles',verifyToken, availableServicesRoutes);
app.use('/localidades',verifyToken, localitiesRoutes);
app.use('/informacionSuscriptor',verifyToken, suscriptorDataRoutes);
app.use('/informacionInstalacion',verifyToken, instalationDataRoutes);
app.use('/historialServiciosTecnicos',verifyToken, technicalServicesHistoryRoutes);
app.use('/estatusServiciosTecnicos',verifyToken, technicalServiceStatusRoutes);
app.use('/serviciosTecnicos',verifyToken, technicalServicesRoutes);
app.use('/historialPagos',verifyToken, paymentHistoriesRoutes);
app.use('/statusCuentaCliente',verifyToken, clientAccountStatus);
app.use('/registro', authRoutes);

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

