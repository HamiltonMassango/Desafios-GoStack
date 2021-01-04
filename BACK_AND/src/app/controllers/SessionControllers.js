import User from '../models/User';

class SessionController {
  async index(req, res, next) {
    const users = await User.findAll();
    console.log(users);
    return res.json({ users });
  }
}

export default new SessionController();
