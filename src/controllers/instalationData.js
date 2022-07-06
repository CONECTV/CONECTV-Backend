const InstalationData = require('../database/models/instalationData');

exports.createInstalationData =  async (req, res) => {
    try {
        const _instalationDataCreation =  await InstalationData.create(
            {
                suscriptorDatumId: Number(req.body.suscriptorDatumId),
                instalationDate: new Date(req.body.instalationDate),
                poleNumber: Number(req.body.poleNumber),
                napNumber: Number(req.body.napNumber),
                napOutput: Number(req.body.napOutput),
                macAddress: req.body.macAddress,
                ipAddress: req.body.ipAddress,
                numberTelevisions: Number(req.body.numberTelevisions)
            }
        )
        res.status(201).send(`instalationData with IP Adreess ${req.body.ipAddress} was successfully created`);
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getInstalationData  =  async (req, res) => {
    try {
        const instalationsData = await InstalationData.findAll();
        res.status(200).send(JSON.stringify(instalationsData));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateInstalationData = async (req, res) => {
    try {
        const isInstalationDataExists =  await InstalationData.findOne({ where: { id: Number(req.body.id) }})
        if (!isInstalationDataExists) return res.status(400).json({error: 'InstalationData not found'})

        await InstalationData.update({ 
            instalationDate: new Date(req.body.instalationDate),
            poleNumber: Number(req.body.poleNumber),
            napNumber: Number(req.body.napNumber),
            napOutput: Number(req.body.napOutput),
            macAddress: req.body.macAddress,
            ipAddress: req.body.ipAddress,
            numberTelevisions: Number(req.body.numberTelevisions)
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`instalationData with IP Adreess ${req.body.ipAddress} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}