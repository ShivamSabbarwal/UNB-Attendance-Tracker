import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';
const router = new Router();

// Get all Posts
router.route('/login').post(LoginController.login);

router.route('/logout').get(LoginController.logout);

router.route('/signup').post(LoginController.generateUserAccount);

export default router;
