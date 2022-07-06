const User = require('../../database/models/user');

const Joi = require('@hapi/joi');
var bcrypt = require('bcryptjs');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


exports.signup =  async (req, res) => {

    const { error } = schemaRegister.validate(req.body)

    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }

    const isEmailExist = await User.findOne({ where: { email: req.body.email} });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);


    try {
        const _userCreation = await User.create({
            name: req.body.name,
            password: password,
            email: req.body.email
        })

        res.json({
            error: null,
            data: _userCreation
        })
    } catch (error) {
        res.status(400).json({error})
    }
}
