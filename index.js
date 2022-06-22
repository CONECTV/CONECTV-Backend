const sequelize = require('./src/configs/db_connection')
const http = require('http');
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


server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


var models = [
  'user'
];

models.forEach(function (model) {
  module.exports[model] = require('./src/models' + '/' + model);
})

async function ModelCreation () {
  await sequelize.sync({ force: true });
}
ModelCreation()

module.exports.sequelize = sequelize

