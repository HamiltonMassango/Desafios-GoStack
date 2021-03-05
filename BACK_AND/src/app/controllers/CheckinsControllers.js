import Checkins from '../models/Checkins';

class CheckinsControllers {
  async store(req, res) {
    const checkins = await Checkins.create(req.body);
    return res.json(checkins);
  }
  async index(req, res) {
    const checkins = await Checkins.findAll();
    return res.json(checkins);
  }
}

export default new CheckinsControllers();
