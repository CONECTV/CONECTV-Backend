const AvailableAbono = require('../database/models/availableAbono')

exports.createAvailableAbonos =  async (req, res) => {
    try {
        const _availableAbonosCreation =  await AvailableAbono.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`available abono ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getAvailableAbonos  =  async (req, res) => {
    try {
        const availableAbonos = await AvailableAbono.findAll();
        res.status(200).send(JSON.stringify(availableAbonos));
    } catch (error) {
        console.log(error.message)
    }
};