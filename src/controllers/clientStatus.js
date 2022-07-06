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
        res.status(400).json({error})
    }
}

exports.getClientStatuses  =  async (req, res) => {
    try {
        const clientStatuses = await ClientStatus.findAll();
        res.status(200).send(JSON.stringify(clientStatuses));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateClientStatus = async (req, res) => {
    try {
        const isClientStatusExists =  await ClientStatus.findOne({ where: { id: Number(req.body.id) }})
        if (!isClientStatusExists) return res.status(400).json({error: 'ClientStatus not found'})

        await ClientStatus.update({ 
            state: req.body.state,
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`client status ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}