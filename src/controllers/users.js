//ALL HANDLERS FROM OUR ROUTES
const User = require('../database/models/user')

exports.getUser  =  async (req, res) => {
    try {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));

        res.send();
    } catch (error) {
        console.log('Ocurrio un error en el get')
    }
};

exports.createUsuario = (req, res) => {
    res.send('Nuevo user');
};


exports.createUser =  (req, res) => {
    try {
        const createUser =  User.create(
            {
                name: "Rafa",
                password: "2"
            }

        )
        console.log(createUser.name)
        res.send();
    } catch (error) {
        console.log(error.message)
    }
}