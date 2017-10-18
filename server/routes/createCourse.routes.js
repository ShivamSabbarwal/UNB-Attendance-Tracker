import { Router } from 'express';
import * as CreateCourseController from '../controllers/createCourse.controller';
const router = new Router();

// Get all Posts
router.route('/createCourse').post(CreateCourseController.createCourse);

router.route('/removeCourse').post(CreateCourseController.removeCourse);

export default router;
