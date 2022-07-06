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
        res.status(400).json({error})
    }
}

exports.getClientsAcccountStatus =  async (req, res) => {
    try {
        const clientsAcccountStatus = await ClientAcccountStatus.findAll();
        res.status(200).send(JSON.stringify(clientsAcccountStatus));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateClientAcccountStatus = async (req, res) => {
    try {
        const isClientAcccountStatusExists =  await ClientAcccountStatus.findOne({ where: { id: Number(req.body.id) }})
        if (!isClientAcccountStatusExists) return res.status(400).json({error: 'ClientAcccountStatus not found'})

        await ClientAcccountStatus.update({ 
            total: parseFloat(req.body.total)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Client Acccount Status with total ${req.body.total} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}