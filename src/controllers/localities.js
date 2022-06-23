const Localities = require('../database/models/localities');

exports.createLocality =  async (req, res) => {
    try {
        const _localityCreation =  await Localities.create(
            {
                locality: req.body.locality,
                cuttingDate: Number(req.body.cuttingDate),
                internet: (req.body.internet === "true")
            }
        )
        res.status(201).send(`locality ${req.body.locality} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}

exports.getLocalities  =  async (req, res) => {
    try {
        const localities = await Localities.findAll();
        res.status(200).send(JSON.stringify(localities));
    } catch (error) {
        console.log(error.message)
    }
};