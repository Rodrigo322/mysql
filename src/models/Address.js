import { Model, DataTypes } from('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      cep: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize
    });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
  }
}

module.exports = Address