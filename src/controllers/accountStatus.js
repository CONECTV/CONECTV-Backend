const AccountStatus = require('../database/models/accountStatus')

exports.createAccountStatus =  async (req, res) => {
    try {
        const _accountStatusCreation =  await AccountStatus.create(
            {
                status: req.body.status,
            }
        )
        res.status(201).send(`account status ${req.body.status} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getAccountStatuses  =  async (req, res) => {
    try {
        const accountStatuses = await AccountStatus.findAll();
        res.status(200).send(JSON.stringify(accountStatuses));
    } catch (error) {
        console.log(error.message)
    }
};