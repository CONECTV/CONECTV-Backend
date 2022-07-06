const TechnicalServiceStatus = require('../database/models/technicalServiceStatus');

exports.createTechnicalServiceStatus =  async (req, res) => {
    try {
        const _technicalServiceStatusCreation =  await TechnicalServiceStatus.create(
            {
                technicalServicesHistoryId: Number(req.body.technicalServicesHistoryId),
                status: req.body.status,
            }
        )
        res.status(201).send(`Technical Services Status with status ${req.body.status} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getTechnicalServicesStatus =  async (req, res) => {
    try {
        const technicalServiceStatus = await TechnicalServiceStatus.findAll();
        res.status(200).send(JSON.stringify(technicalServiceStatus));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateTechnicalServiceStatus = async (req, res) => {
    try {
        const isTechnicalServiceStatusExists =  await TechnicalServiceStatus.findOne({ where: { id: Number(req.body.id) }})
        if (!isTechnicalServiceStatusExists) return res.status(400).json({error: 'TechnicalServiceStatus not found'})

        await TechnicalServiceStatus.update({ 
            status: req.body.status
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Technical Service Status ${req.body.status} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}