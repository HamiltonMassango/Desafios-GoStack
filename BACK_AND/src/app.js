import express from 'express';
import router from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
  }
  middlewares() {}
  routes() {
    this.server.use(router);
  }
}
