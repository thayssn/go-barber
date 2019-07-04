import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thays dos Santos Neves',
    email: 'thays.sn@22hotmail.com.br',
    password_hash: 'H324H23H893H',
  });
  return res.json(user);
});

module.exports = routes;
