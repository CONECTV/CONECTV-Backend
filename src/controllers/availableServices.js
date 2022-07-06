const AvailableServices = require('../database/models/availableServices')

exports.createAvailableService =  async (req, res) => {
    try {
        const _availableServiceCreation =  await AvailableServices.create(
            {
                name: req.body.name,
                monthlyPrice: parseFloat(req.body.monthlyPrice)
            }
        )
        res.status(201).send(`available service ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getAvailableServices  =  async (req, res) => {
    try {
        const availableServices = await AvailableServices.findAll();
        res.status(200).send(JSON.stringify(availableServices));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateAvailableService = async (req, res) => {
    try {
        const isAvailableServiceExists =  await AvailableServices.findOne({ where: { id: Number(req.body.id) }})
        if (!isAvailableServiceExists) return res.status(400).json({error: 'AvailableServices not found'})

        await AvailableServices.update({ 
            name: req.body.name,
            monthlyPrice: parseFloat(req.body.monthlyPrice)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`avaliable service ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}