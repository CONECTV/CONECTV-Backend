const SuscriptorData = require('../database/models/suscriptorData');
const Localities = require('../database/models/localities');
const AvailableServices = require('../database/models/availableServices');
const ClientStatus = require('../database/models/clientStatus');


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
    try {
        function convertToEnglish(_condition){
            var filters = {
                'telefono': 'telephone',
                'nombre': 'customerName',
                'contrato': 'contract'
            };
            return filters[_condition];
        }

        async function getSuscriptorsData (type) {
            async function exists(){
                if (await SuscriptorData.findOne({ where: { [type]:req.body.search }})) return true;
            }
            if (await exists()) return await SuscriptorData.findAll({
                attributes: ['contract', 'customerName', 'street', 'colony', 'houseNumber', 'telephone'],
                where: { 
                    [type]: req.body.search 
                },
                include: [
                    { model: Localities, attributes:['locality']},
                    { model: AvailableServices, attributes:['name']},
                    { model: ClientStatus, attributes:['state']}
                ],
                raw: true
            });
            else res.status(400).json({error: `${type} suscriptor not found`});
        }

        var suscriptorsData = await getSuscriptorsData(convertToEnglish(req.body.type));
        res.status(200).send(JSON.stringify(suscriptorsData));
    } catch (error) {
        res.status(400).json({error});
    }
};

exports.getSuscriptorData  =  async (req, res) => {
    try {
        const isSuscriptorDataExists =  await SuscriptorData.findOne({ where: { contract: Number(req.body.contract) }})
        if (!isSuscriptorDataExists) return res.status(400).json({error: 'SuscriptorData contract not found'})

        const suscriptorsData = await SuscriptorData.findOne({ where: { contract: Number(req.body.contract) }})
        res.status(200).send(suscriptorsData);
    } catch (error) {
        res.status(400).json({error})
    }
};
