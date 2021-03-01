import { Model } from 'sequelize';

class Planos extends Model {
  static init(sequelize) {
    super.init(
      {
        duration,
        price,
      },
      { sequelize }
    );
    return this;
  }
}

export default Planos;
