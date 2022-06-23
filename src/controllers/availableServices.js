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
        console.log(error.message)
    }
}

exports.getAvailableServices  =  async (req, res) => {
    try {
        const availableServices = await AvailableServices.findAll();
        res.status(200).send(JSON.stringify(availableServices));
    } catch (error) {
        console.log(error.message)
    }
};