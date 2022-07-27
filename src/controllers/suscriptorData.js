const SuscriptorData = require('../database/models/suscriptorData');
const Localities = require('../database/models/localities');
const AvailableServices = require('../database/models/availableServices');
const ClientStatus = require('../database/models/serviceStatus');

exports.createSuscriptorData =  async (req, res) => {
    try {
        const _suscriptorDataCreation =  await SuscriptorData.create(
            {
                customerName: req.body.customerName,
                telephone: Number(req.body.telephone),
                emailAddress: req.body.emailAddress
            }
        )
        res.status(201).send(`suscriptor ${req.body.customerName} was successfully created`);
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
            customerName: req.body.customerName,
            telephone: Number(req.body.telephone),
            emailAddress: req.body.emailAddress
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`suscriptor ${req.body.customerName} was successfully created`);

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
            };
            return filters[_condition];
        }

        async function getSuscriptorsData (type) {
            async function exists(){
                if (await SuscriptorData.findOne({ where: { [type]:req.body.search }})) return true;
            }
            if (await exists()) return await SuscriptorData.findAll({
                where: { 
                    [type]: req.body.search 
                }
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
