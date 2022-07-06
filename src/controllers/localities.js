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
        res.status(400).json({error})
    }
}

exports.getLocalities  =  async (req, res) => {
    try {
        const localities = await Localities.findAll();
        res.status(200).send(JSON.stringify(localities));
    } catch (error) {
        res.status(400).json({error})
    }
};

exports.updateLocality = async (req, res) => {
    try {
        const isLocalityExists =  await Localities.findOne({ where: { id: Number(req.body.id) }})
        if (!isLocalityExists) return res.status(400).json({error: 'Locality not found'})

        await Localities.update({ 
            locality: req.body.locality,
            cuttingDate: Number(req.body.cuttingDate),
            internet: (req.body.internet === "true")
        },{
            where: { 
                id: Number(req.body.id)
            }
        })

        res.status(200).send(`locality ${req.body.locality} was successfully updated`);

    } catch (error) {
        res.status(400).json({error})
    }
}