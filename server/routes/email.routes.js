import { Router } from 'express';
import * as EmailController from '../controllers/email.controller';
const router = new Router();

// Get all Posts
router.route('/email').post(EmailController.sendEmail);


export default router;
