const TechnicalServices = require('../database/models/technicalServices');

exports.createTechnicalService =  async (req, res) => {
    try {
        const _technicalServicesCreation =  await TechnicalServices.create(
            {
                technicalServicesHistoryId: Number(req.body.technicalServicesHistoryId),
                name: req.body.name,
            }
        )
        res.status(201).send(`Technical Services ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getTechnicalServices =  async (req, res) => {
    try {
        const technicalServices = await TechnicalServices.findAll();
        res.status(200).send(JSON.stringify(technicalServices));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateTechnicalServices = async (req, res) => {
    try {
        const isTechnicalServiceExists =  await TechnicalServices.findOne({ where: { id: Number(req.body.id) }})
        if (!isTechnicalServiceExists) return res.status(400).json({error: 'TechnicalServices not found'})

        await TechnicalServices.update({ 
            name: req.body.name,
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Technical service ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}