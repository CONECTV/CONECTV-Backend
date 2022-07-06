const AvailableAbono = require('../database/models/availableAbono')

exports.createAvailableAbono =  async (req, res) => {
    try {
        const _availableAbonoCreation =  await AvailableAbono.create(
            {
                name: req.body.name,
                price: parseFloat(req.body.price)
            }
        )
        res.status(201).send(`available abono ${req.body.name} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getAvailableAbonos  =  async (req, res) => {
    try {
        const availableAbonos = await AvailableAbono.findAll();
        res.status(200).send(JSON.stringify(availableAbonos));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateAvailableAbono = async (req, res) => {
    try {
        const isAvailableAbonoExists =  await AvailableAbono.findOne({ where: { id: Number(req.body.id) }})
        if (!isAvailableAbonoExists) return res.status(400).json({error: 'AvailableAbono not found'})

        await AvailableAbono.update({ 
            name: req.body.name,
            price: parseFloat(req.body.price)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`avaliable abono ${req.body.name} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}