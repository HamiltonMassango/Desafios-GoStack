import Sequelize from 'sequelize';

import configDatabase from '../config/databases';
import Users from '../app/models/User';
import Students from '../app/models/Students';

const models = [Users, Students];

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
