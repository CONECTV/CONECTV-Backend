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
        console.log(error.message)
    }
}

exports.getTechnicalServicesHistory =  async (req, res) => {
    try {
        const technicalServicesHistory = await TechnicalServicesHistory.findAll();
        res.status(200).send(JSON.stringify(technicalServicesHistory));
    } catch (error) {
        console.log(error.message)
    }
};