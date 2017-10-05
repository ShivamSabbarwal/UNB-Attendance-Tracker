import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';
const router = new Router();

// Get all Posts
router.route('/login').get(LoginController.login);

export default router;
