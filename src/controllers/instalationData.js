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
        console.log(error.message)
    }
}

exports.getInstalationData  =  async (req, res) => {
    try {
        const instalationsData = await InstalationData.findAll();
        res.status(200).send(JSON.stringify(instalationsData));
    } catch (error) {
        console.log(error.message)
    }
};