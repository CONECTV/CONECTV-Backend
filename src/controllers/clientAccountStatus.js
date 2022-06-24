const ClientAcccountStatus = require('../database/models/clientAcccountStatus');

exports.createClientAcccountStatus =  async (req, res) => {
    try {
        const _clientAcccountStatusCreation =  await ClientAcccountStatus.create(
            {
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                accountStatusId: Number(req.body.accountStatusId),
                total: parseFloat(req.body.total),
            }
        )
        res.status(201).send(`Client Acccount Status with total ${req.body.total} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getClientsAcccountStatus =  async (req, res) => {
    try {
        const clientsAcccountStatus = await ClientAcccountStatus.findAll();
        res.status(200).send(JSON.stringify(clientsAcccountStatus));
    } catch (error) {
        console.log(error.message)
    }
};