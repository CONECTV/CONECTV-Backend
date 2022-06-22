const User = require('../database/models/user')

exports.getUser  =  async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(JSON.stringify(users));
    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};

exports.createUser =  async (req, res) => {
    try {
        const _userCreation =  await User.create(
            {
                name: req.body.name,
                password: req.body.password
            }
        )
        res.status(201).send(`user ${req.body.name} was successfully created`);
    } catch (error) {
        console.log(error.message)
    }
}