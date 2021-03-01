import Sequelize from 'sequelize';

import configDatabase from '../config/databases';
import Users from '../app/models/User';
import Students from '../app/models/Students';
import Planos from '../app/models/Planos';

const models = [Users, Students, Planos];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
