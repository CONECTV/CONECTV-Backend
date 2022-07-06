const AvailableCharges = require('../database/models/availableCharges')

exports.createAvailableCharge =  async (req, res) => {
    try {
        const _availableChargeCreation =  await AvailableCharges.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`available charge ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getAvailableCharges  =  async (req, res) => {
    try {
        const availableCharges = await AvailableCharges.findAll();
        res.status(200).send(JSON.stringify(availableCharges));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateAvailableCharge = async (req, res) => {
    try {
        const isAvailableChargesExists =  await AvailableCharges.findOne({ where: { id: Number(req.body.id) }})
        if (!isAvailableChargesExists) return res.status(400).json({error: 'AvailableCharges not found'})

        await AvailableCharges.update({ 
            name: req.body.name,
            price: parseFloat(req.body.price)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`avaliable charge ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}