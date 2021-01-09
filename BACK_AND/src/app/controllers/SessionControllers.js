import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';
class SessionController {
  async store(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'User not found! ' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Password does not match! ' });
    }

    const { id, name } = user;

    return res.json({
      users: { name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

export default new SessionController();
