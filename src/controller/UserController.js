const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async listarUm(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    return res.json({ user });
  },

  async store(req, res) {
    try {
      const { name, email } = req.body;

      const user = await User.create({ name, email });

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar usuario' });
    }
  },

  async atualizar(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;


    const user = await User.update({ name, email }, { where: { id } })


    return res.json({ user });

  }, 

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.destroy({ where: { id } });

    return res.json({ ok: true });
  }
};