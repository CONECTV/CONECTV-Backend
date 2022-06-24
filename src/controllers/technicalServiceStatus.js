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
        console.log(error.message)
    }
}

exports.getTechnicalServicesStatus =  async (req, res) => {
    try {
        const technicalServiceStatus = await TechnicalServiceStatus.findAll();
        res.status(200).send(JSON.stringify(technicalServiceStatus));
    } catch (error) {
        console.log(error.message)
    }
};