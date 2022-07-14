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
                rfc: req.body.rfc,
                rfcAddress: req.body.rfcAddress
            }
        )
        res.status(201).send(`suscriptor with contract ${req.body.contract} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getSuscriptorsData  =  async (req, res) => {
    try {
        const suscriptorsData = await SuscriptorData.findAll();
        res.status(200).send(JSON.stringify(suscriptorsData));
    } catch (error) {
        res.status(400).json({error})
    }
};


exports.updateSuscriptorData= async (req, res) => {
    try {
        const isSuscriptorDataExists =  await SuscriptorData.findOne({ where: { id: Number(req.body.id) }})
        if (!isSuscriptorDataExists) return res.status(400).json({error: 'SuscriptorData not found'})

        await SuscriptorData.update({ 
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
            rfc: req.body.rfc,
            rfcAddress: req.body.rfcAddress
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`suscriptor with contract ${req.body.contract} was successfully created`);

    } catch (error) {
        res.status(400).json({error})
    }
}


exports.getSuscriptorsDataSearchBar  =  async (req, res) => {
    const condition = req.body.type;
    var suscriptorsData;
    try {
        switch(condition) {
            case 'contrato':
                const isContractExists =  await SuscriptorData.findOne({ where: { contract: Number(req.body.search) }})
                if (!isContractExists) return res.status(400).json({error: 'Contract suscriptor not found'})
                suscriptorsData = await SuscriptorData.findAll({ where: { contract: Number(req.body.search)}})
                break
                
            case 'nombre':
                const isNombreExists =  await SuscriptorData.findOne({ where: { customerName: req.body.search }})
                if (!isNombreExists) return res.status(400).json({error: 'Suscriptor not found'})
                suscriptorsData = await SuscriptorData.findAll({ where: { customerName: req.body.search}})
                break

            case 'telefono':
                const isTelefonoExists =  await SuscriptorData.findOne({ where: { telephone: Number(req.body.search) }})
                if (!isTelefonoExists) return res.status(400).json({error: 'Telephone suscriptor not found'})
                suscriptorsData = await SuscriptorData.findAll({ where: { telephone: Number(req.body.search) }})
                break
            default:
                break
        }       
        res.status(200).send(JSON.stringify(suscriptorsData));
    } catch (error) {
        res.status(400).json({error})
    }
};
