const sequelize = require('./src/configs/db_connection')
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
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
  module.exports[model] = require('./src/models' + '/' + model);
})

async function ModelCreation () {
  await sequelize.sync({ force: true });
}
ModelCreation()

module.exports.sequelize = sequelize

