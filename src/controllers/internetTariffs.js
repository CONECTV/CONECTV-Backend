const InternetTariffs = require('../database/models/internetTariffs')

exports.createInternetTariffs =  async (req, res) => {
    try {
        const _internetTariffCreation =  await InternetTariffs.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`internet tariff ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getInternetTariffs  =  async (req, res) => {
    try {
        const internetTariffs = await InternetTariffs.findAll();
        res.status(200).send(JSON.stringify(internetTariffs));
    } catch (error) {
        console.log(error.message)
    }
};