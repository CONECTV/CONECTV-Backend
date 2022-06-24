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
        console.log(error.message)
    }
}

exports.getTechnicalServices =  async (req, res) => {
    try {
        const technicalServices = await TechnicalServices.findAll();
        res.status(200).send(JSON.stringify(technicalServices));
    } catch (error) {
        console.log(error.message)
    }
};