import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
const router = new Router();

// Add students to a specific course
router.route('/course/:courseTitle/students').put(CourseController.addStudents);

// Drop students from a specific course
router.route('/course/:courseTitle/students').delete(CourseController.dropStudents);

export default router;
