const ServiceStatus = require('../database/models/serviceStatus')

exports.createServiceStatus =  async (req, res) => {
    try {
        const _availableServiceStatus =  await ServiceStatus.create(
            {
                state: req.body.state,
            }
        )
        res.status(201).send(`service status ${req.body.state} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getServiceStatuses  =  async (req, res) => {
    try {
        const serviceStatuses = await ServiceStatus.findAll();
        res.status(200).send(JSON.stringify(serviceStatuses));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateServiceStatus = async (req, res) => {
    try {
        const isServiceStatusExists =  await ServiceStatus.findOne({ where: { id: Number(req.body.id) }})
        if (!isServiceStatusExists) return res.status(400).json({error: 'ServiceStatus not found'})

        await ServiceStatus.update({ 
            state: req.body.state,
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`service status ${req.body.state} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}