const PaymentHistory = require('../database/models/paymentHistory');

exports.createPaymentHistory =  async (req, res) => {
    try {
        const _paymentHistoryCreation =  await PaymentHistory.create(
            {
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                concept: req.body.concept,
                total: parseFloat(req.body.total),
                paymentDate: new Date(req.body.paymentDate),
            }
        )
        res.status(201).send(`Payment history ${req.body.concept} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getPaymentHistories =  async (req, res) => {
    try {
        const paymentHistories = await PaymentHistory.findAll();
        res.status(200).send(JSON.stringify(paymentHistories));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updatePaymentHistory = async (req, res) => {
    try {
        const isPaymentHistoryExists =  await PaymentHistory.findOne({ where: { id: Number(req.body.id) }})
        if (!isPaymentHistoryExists) return res.status(400).json({error: 'PaymentHistory not found'})

        await PaymentHistory.update({ 
            concept: req.body.concept,
            total: parseFloat(req.body.total),
            paymentDate: new Date(req.body.paymentDate),
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Payment history ${req.body.concept} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}