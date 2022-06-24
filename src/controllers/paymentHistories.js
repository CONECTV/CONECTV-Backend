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
        console.log(error.message)
    }
}

exports.getPaymentHistories =  async (req, res) => {
    try {
        const paymentHistories = await PaymentHistory.findAll();
        res.status(200).send(JSON.stringify(paymentHistories));
    } catch (error) {
        console.log(error.message)
    }
};