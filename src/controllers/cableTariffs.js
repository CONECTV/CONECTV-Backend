const CableTariffs = require('../database/models/cableTariffs')

exports.createCableTariff =  async (req, res) => {
    try {
        const _cableTariffCreation =  await CableTariffs.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`cable tariff ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getCableTariffs  =  async (req, res) => {
    try {
        const cableTariffs = await CableTariffs.findAll();
        res.status(200).send(JSON.stringify(cableTariffs));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateCableTariff = async (req, res) => {
    try {
        const isCableTariffExists =  await CableTariffs.findOne({ where: { id: Number(req.body.id) }})
        if (!isCableTariffExists) return res.status(400).json({error: 'CableTariff not found'})

        await CableTariffs.update({ 
            name: req.body.name,
            price: parseFloat(req.body.price)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Cable tariff ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}

exports.deleteCableTariff = async (req, res) => {
    try {
        const isCableTariffsExists =  await CableTariffs.findOne({ where: { id: Number(req.body.id) }})
        if (!isCableTariffsExists) return res.status(400).json({error: 'CableTariffs not found'})

        await CableTariffs.destroy({
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`cable tariff was successfully deleted`);

    } catch (error) {
        res.status(400).json({error})
    }
}