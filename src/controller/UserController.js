const User = require('../models/User')

module.exports = {
    async index(req, res) {
        try {
            const user = await User.findAll();

            if(user.length == 0) {
                return res.json({ massege: "no registered users"})
            }

            return res.json({ user });
        } catch (error) {
            return res.json({ error: 'failed to list users' })
        }
    },
    async store(req, res) {
        try {
            const { name, email } = req.body;

            let user = await User.findOne({where: {email}})

            if(user) {
                return res.json({massage: "existing user"})
            } else {
                user = await User.create({ name, email });
            }

            return res.json({ user });
            
        } catch (err) {
            return res.json({ error: 'failed to create user' + err});
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            let user = await User.update({ name, email }, { where: { id } });

            return res.json(user);
        } catch (err) {
            return res.json({ error: 'failed to update user ' + err});
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id)

            if(!user) {
                return res.status(400).json({ error: 'user not found' })
            }

            user = await User.destroy({ where: { id } });

            return res.json({ massage: 'success to delete user' });
        } catch (error) {
            return res.json({ error: 'failed to delete user', error });
        }

    },
}