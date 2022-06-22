const CableTariffs = require('../database/models/cableTariffs')

exports.createCableTariffs =  async (req, res) => {
    try {
        const _cableTariffCreation =  await CableTariffs.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`cable tariff ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getCableTariffs  =  async (req, res) => {
    try {
        const cableTariffs = await CableTariffs.findAll();
        res.status(200).send(JSON.stringify(cableTariffs));
    } catch (error) {
        console.log(error.message)
    }
};