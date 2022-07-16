const InternetTariffs = require('../database/models/internetTariffs')

exports.createInternetTariff =  async (req, res) => {
    try {
        const _internetTariffCreation =  await InternetTariffs.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`internet tariff ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getInternetTariffs  =  async (req, res) => {
    try {
        const internetTariffs = await InternetTariffs.findAll();
        res.status(200).send(JSON.stringify(internetTariffs));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateInternetTariff = async (req, res) => {
    try {
        const isInternetTariffsExists =  await InternetTariffs.findOne({ where: { id: Number(req.body.id) }})
        if (!isInternetTariffsExists) return res.status(400).json({error: 'InternetTariff not found'})

        await InternetTariffs.update({ 
            name: req.body.name,
            price: parseFloat(req.body.price)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Internet tariffs ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}

exports.deleteInternetTariff = async (req, res) => {
    try {
        const isInternetTariffsExists =  await InternetTariffs.findOne({ where: { id: Number(req.body.id) }})
        if (!isInternetTariffsExists) return res.status(400).json({error: 'InternetTariff not found'})

        await InternetTariffs.destroy({
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`internet tariffs ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}