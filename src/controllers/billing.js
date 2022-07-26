const Billing = require('../database/models/billing');

exports.createBillingStatus =  async (req, res) => {
    try {
        const _billingCreation =  await Billing.create(
            {
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                accountStatusId: Number(req.body.accountStatusId),
                total: parseFloat(req.body.total),
            }
        )
        res.status(201).send(`Billing with total ${req.body.total} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getBillingStatus =  async (req, res) => {
    try {
        const billing = await Billing.findAll();
        res.status(200).send(JSON.stringify(billing));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateBillingStatus = async (req, res) => {
    try {
        const isBillingExists =  await Billing.findOne({ where: { id: Number(req.body.id) }})
        if (!isBillingExists) return res.status(400).json({error: 'Billing not found'})

        await Billing.update({ 
            total: parseFloat(req.body.total)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Billing with total ${req.body.total} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}