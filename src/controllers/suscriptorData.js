const SuscriptorData = require('../database/models/suscriptorData');

exports.createSuscriptorData =  async (req, res) => {
    try {
        const _suscriptorDataCreation =  await SuscriptorData.create(
            {
                localityId: Number(req.body.localityId),
                availableServiceId: Number(req.body.availableServiceId),
                clientStatusId: Number(req.body.clientStatusId),
                contract: Number(req.body.contract),
                customerName: req.body.customerName,
                colony: req.body.colony,
                street: req.body.street,
                houseNumber: Number(req.body.houseNumber),
                innerHouseNumber: Number(req.body.innerHouseNumber),
                observations: req.body.observations,
                urlLocation: req.body.urlLocation,
                telephone: Number(req.body.telephone),
                emailAddress: req.body.emailAddress,
                rfc: req.body.rfc
            }
        )
        res.status(201).send(`suscriptor with contract ${req.body.contract} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getSuscriptorsData  =  async (req, res) => {
    try {
        const suscriptorsData = await SuscriptorData.findAll();
        res.status(200).send(JSON.stringify(suscriptorsData));
    } catch (error) {
        console.log(error.message)
    }
};