import { Model } from 'sequelize';

class Matriculas extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Students, { foreignKey: 'student_id' });
  }
}

export default Matriculas;
