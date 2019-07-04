import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (err) {
      return err;
    }
  }
}

export default new UserController();
