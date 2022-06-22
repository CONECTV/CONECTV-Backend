const AvailableCharges = require('../database/models/availableCharges')

exports.createAvailableCharges =  async (req, res) => {
    try {
        const _availableChargesCreation =  await AvailableCharges.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`available charges ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getAvailableCharges  =  async (req, res) => {
    try {
        const availableCharges = await AvailableCharges.findAll();
        res.status(200).send(JSON.stringify(availableCharges));
    } catch (error) {
        console.log(error.message)
    }
};