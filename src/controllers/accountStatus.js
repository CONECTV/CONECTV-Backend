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
        res.status(400).json({error})
    }
}

exports.getAccountStatuses  =  async (req, res) => {
    try {
        const accountStatuses = await AccountStatus.findAll();
        res.status(200).send(JSON.stringify(accountStatuses));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateAccountStatus = async (req, res) => {
    try {
        const isAccountStatusExists =  await AccountStatus.findOne({ where: { id: Number(req.body.id) }})
        if (!isAccountStatusExists) return res.status(400).json({error: 'AccountStatus not found'})

        await AccountStatus.update({ status: req.body.status},{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`account status ${req.body.status} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}