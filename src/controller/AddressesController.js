const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
      const { user_id } = req.params;
      const { cep, street, number } = req.body;

      const user = await User.findByPk(user_id);

      if(!user) {
        return res.json({ error: 'User not found' });
      }

      const address = await Address.create({ 
        cep, 
        street, 
        number, 
        user_id 
      });

      return res.json({ address });
  },
};