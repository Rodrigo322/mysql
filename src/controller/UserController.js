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

            const user = await User.findOne({email})

            if(user) {
                return res.json({massage: "existing user"})
            }

            user = await User.create({ name, email });

            return res.json({ user });
        } catch (error) {
            return res.json({ error: 'failed to create user' });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            const user = await User.update({ name, email }, { where: { id } });

            return res.json({ user });
        } catch (error) {
            return res.json({ error: 'failed to update user' });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            const user = await User.

            User.destroy({ where: { id } });

            return res.json();
        } catch (error) {
            return res.json({ error: 'failed to delete user' });
        }

    },
}