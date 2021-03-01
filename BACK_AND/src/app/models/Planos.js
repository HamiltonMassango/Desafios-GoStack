import { Model, DataTypes } from 'sequelize';

class Planos extends Model {
  static init(sequelize) {
    super.init(
      {
        duration: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
      },
      { sequelize }
    );
    return this;
  }
}

export default Planos;
