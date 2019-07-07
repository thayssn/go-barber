import { Router } from 'express';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const routes = new Router();
const API_BASE_URL = '/api';

routes.post(`${API_BASE_URL}/users`, UserController.store);
routes.post(`${API_BASE_URL}/auth`, AuthController.store);

module.exports = routes;
