const ServiceSuscriptor = require('../database/models/serviceSuscriptor');

exports.createServiceSuscriptor =  async (req, res) => {
    try {
        const _suscriptorDataCreation =  await ServiceSuscriptor.create(
            {
                localityId: Number(req.body.localityId),
                availableServiceId: Number(req.body.availableServiceId),
                serviceStatusId: Number(req.body.serviceStatusId),
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                contract: Number(req.body.contract),
                colony: req.body.colony,
                street: req.body.street,
                houseNumber: Number(req.body.houseNumber),
                innerHouseNumber: Number(req.body.innerHouseNumber),
                observations: req.body.observations,
                urlLocation: req.body.urlLocation,
                rfc: req.body.rfc,
                rfcAddress: req.body.rfcAddress
            }
        )
        res.status(201).send(`Service with contract ${req.body.contract} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getServicesSuscriptor   =  async (req, res) => {
    try {
        const serviceSuscriptorData = await ServiceSuscriptor.findAll();
        res.status(200).send(JSON.stringify(serviceSuscriptorData));
    } catch (error) {
        res.status(400).json({error})
    }
};


exports.updateServiceSuscriptor= async (req, res) => {
    try {
        const isServiceSuscriptorExists =  await ServiceSuscriptor.findOne({ where: { id: Number(req.body.id) }})
        if (!isServiceSuscriptorExists) return res.status(400).json({error: 'ServiceSuscriptor not found'})

        await ServiceSuscriptor.update({ 
            localityId: Number(req.body.localityId),
            availableServiceId: Number(req.body.availableServiceId),
            serviceStatusId: Number(req.body.serviceStatusId),
            suscriptorDatumId: Number(req.body.suscriptorDatumId),
            contract: Number(req.body.contract),
            colony: req.body.colony,
            street: req.body.street,
            houseNumber: Number(req.body.houseNumber),
            innerHouseNumber: Number(req.body.innerHouseNumber),
            observations: req.body.observations,
            urlLocation: req.body.urlLocation,
            rfc: req.body.rfc,
            rfcAddress: req.body.rfcAddress
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`Service with contract ${req.body.contract} was successfully created`);

    } catch (error) {
        res.status(400).json({error})
    }
}
