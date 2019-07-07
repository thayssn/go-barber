import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
      const { id, name, email, provider } = await User.create(req.body);
      return res.status(201).json({ id, name, email, provider });
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'An error ocurred during the register' });
    }
  }
}

export default new UserController();
