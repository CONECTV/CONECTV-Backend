const TechnicalServicesHistory = require('../database/models/technicalServicesHistory');

exports.createTechnicalServiceHistory =  async (req, res) => {
    try {
        const _technicalServiceHistoryCreation =  await TechnicalServicesHistory.create(
            {
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                commentary: req.body.commentary,
                startDate: new Date(req.body.startDate),
                endDate: new Date(req.body.endDate),
            }
        )
        res.status(201).send(`Technical Services History with startDate ${req.body.startDate} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getTechnicalServicesHistory =  async (req, res) => {
    try {
        const technicalServicesHistory = await TechnicalServicesHistory.findAll();
        res.status(200).send(JSON.stringify(technicalServicesHistory));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateTechnicalServiceHistory = async (req, res) => {
    try {
        const isTechnicalServiceHistroyExists =  await TechnicalServicesHistory.findOne({ where: { id: Number(req.body.id) }})
        if (!isTechnicalServiceHistroyExists) return res.status(400).json({error: 'TechnicalServicesHistory not found'})

        await TechnicalServicesHistory.update({ 
            commentary: req.body.commentary,
            startDate: new Date(req.body.startDate),
            endDate: new Date(req.body.endDate)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Technical Services History with startDate ${req.body.startDate} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}