import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
import * as AttendanceController from '../controllers/attendance.controller';
const router = new Router();

// Add students to a specific course
router.route('/course/:courseTitle/students').put(CourseController.addStudents);

// Drop students from a specific course
router.route('/course/:courseTitle/students').delete(CourseController.dropStudents);

// Get list of courses
router.route('/courseList').get(CourseController.courseList);
router.route('/courseListByStudent').post(CourseController.courseListByStudent);
router.route('/courseListByProfessor').post(CourseController.courseListByProfessor);

// Add a new course
router.route('/course').post(CourseController.createCourse);

// Drop a course from the database
router.route('/course').delete(CourseController.removeCourse);

// Attendance
router.route('/course/:courseTitle/attendance').put(AttendanceController.submitAttendance);
router.route('/course/:courseTitle/attendance').get(AttendanceController.getAttendance);
router.route('/course/:courseTitle/seat').put(AttendanceController.reserveSeat);

export default router;
