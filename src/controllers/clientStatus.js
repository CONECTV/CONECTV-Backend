const ClientStatus = require('../database/models/clientStatus')

exports.createClientStatus =  async (req, res) => {
    try {
        const _availableClientStatus =  await ClientStatus.create(
            {
                state: req.body.state,
            }
        )
        res.status(201).send(`client status ${req.body.state} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getClientStatuses  =  async (req, res) => {
    try {
        const clientStatuses = await ClientStatus.findAll();
        res.status(200).send(JSON.stringify(clientStatuses));
    } catch (error) {
        console.log(error.message)
    }
};