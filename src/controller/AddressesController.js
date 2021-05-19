const Addresses = require('../models/Address');
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'user not found' })
        }

        const address = await Addresses.create({ 
            zipcode, 
            street, 
            number,
            user_id
        });

        return res.json( address );
    },
    
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'user not found' })
        }

        const address = await Addresses.findAll({ where: { user_id } });

        return res.json({ user, address });
    },


    async update(req, res) {
        const { user_id, id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);
        let address = await Addresses.findByPk(id);

        if(!user) {
            return res.status(400).json({ error: 'user not found' })
        }
        if(!address) {
            return res.status(400).json({ error: 'address not found' })
        }

        address = await Addresses.update({ 
            zipcode, 
            street, 
            number 
        }, 
        { where: { user_id, id } });

        return res.json({ address });
    },
}
