import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();
const API_BASE_URL = '/api';

routes.post(`${API_BASE_URL}/users`, UserController.store);

module.exports = routes;
