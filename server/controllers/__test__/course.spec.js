import test from 'ava';
import request from 'supertest';
import app from '../../server';
import { connectDB, dropDB } from '../../util/test-helpers';
import User from '../../models/user'
import Course from '../../models/course'
import Session from '../../models/session'
import courseGrid from '../../models/coursegrid';

// Initial posts added into test db
const users = [
  new User({
    'username': 'admin',
    'password': 'password',
    'email': 'admin@admin.com',
    'isAdmin': true
  }),
  new User({
    'username': 'student',
    'password': 'password',
    'email': 'student@student.com',
    'isAdmin': false
  }),
];

const courses = [
  new Course({
    'title': 'courseTitle',
    'professor': 'admin',
    'usernames':[],
    'time': 'MWF 10:30-11:20',
    'term': 'FA2017',
    'emailTemplate': 'You have missed class!',
    'numDays': [[5]],
    'attendanceRecords': []
  }),
];

const sessions = [
  new Session({
    'username': 'admin',
    'sessionId': '9abc2e1e1eaf65d72324e024dead0f1e'
  })
];

const grid = [
  new courseGrid({
    'courseName': 'courseTitle',
    'class': [["","","",""],["","","",""]]
  })
];

test.beforeEach('connect and add data', t => {
  connectDB(t, () => {
    Course.create(courses, (err, courses) => {
      if (err) t.fail('Unable to create courses');
      else {
        Session.create(sessions, (err, session) => {
          if (err) t.fail('Unable to create session');
          else {
            User.create(users, (err, users) => {
              if (err) t.fail('Unable to create users');
              else {
                courseGrid.create(grid, (err, grid) => {
                  if (err) t.fail('Unable to create courseGrid');
                })
              }
            })
          }
        })
      }
    })
  });
});

test.after.always(t => {
  dropDB(t);
});

test.serial('get course list (No Session)', async t => {
  t.plan(1);
  const res = await request(app)
    .get('/api/courseList')
    .set('Accept', 'application/json');
    t.is(res.status, 401)
});

//this one fails because the session cookie isn't properly being set & I don't know why...
test.serial('get course list', async t => {
  t.plan(1);
  const res = await request(app)
    .get('/api/courseList')
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .set('Accept', 'application/json');
    t.is(res.status, 200)
});

test.serial('Check generateUserAccount', async t => {
  t.plan(1);
  const res = await request(app)
    .post('/api/signup')
    .send({
      'username': 'admin11',
      'password': 'password11',
      'email': 'admin@admin11',
      'isAdmin': true
    })
    .set('Accept', 'application/json');
    t.is(res.status, 200)
});

test.serial('Check incorrect login request', async t => {
  t.plan(1);

  const res = await request(app)
    .post('/api/login')
    .send({
    "username": "",
    "password": ""
    })
    .set('Accept', 'application/json');

  t.is(res.status, 403);
});

test.serial('Check unverified login', async t => {
  t.plan(1);

  const res = await request(app)
    .post('/api/login')
    .send({
    "username": "asd",
    "password": "asd"
    })
    .set('Accept', 'application/json');

  t.is(res.status, 401);
});

test.serial('Check correct login', async t => {
  t.plan(1);
  const res = await request(app)
    .post('/api/login')
    .send({
      "username": "admin",
      "password": "password"
    })
    .set('Accept', 'application/json');
    t.is(res.status, 200);
});

test.serial('Check create course with wrong course name', async t => {
  t.plan(1);

  const res = await request(app)
    .post('/api/course')
    .send({
      'title': 'course1/',
      'professor': 'admin',
      'institution': 'UNBF',
      'location': 'Fredericton'
    })
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .set('Accept', 'application/json');

  t.is(res.status, 403);
});

test.serial('Check create course (Unverified)', async t => {
  t.plan(1);

  const res = await request(app)
    .post('/api/course')
    .send({
      'title': 'course1',
      'professor': 'admin',
      'institution': 'UNBF',
      'location': 'Fredericton'
    })
    .set('Accept', 'application/json')
  t.is(res.status, 401);
});

test.serial('Check create course', async t => {
  t.plan(1);

  const res = await request(app)
    .post('/api/course')
    .send({
      'title': 'course1',
      'term': 'FA2017',
      'gridsize': [4,3],
      'time': 'TuTh 8:30-10:00',
      'courseGrid': [["","","",""],["","","",""]],
      'emailTemplate': 'You have missed to many lectures!',
      'numDays': [5]
    })
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .set('Accept', 'application/json')
  t.is(res.status, 200);
});

test.serial('Check generateUserAccount (Student)', async t => {
  t.plan(1);
  const res = await request(app)
    .post('/api/signup')
    .send({
      'username': 'student1',
      'password': 'password1',
      'email': 'student@student.com1',
      'isAdmin': false
    })
    .set('Accept', 'application/json');
    t.is(res.status, 200)
});

test.serial('Check add student to course', async t => {
t.plan(1);
  const res = await request(app)
    .put('/api/course/courseTitle/students')
    .set('Accept', 'application/json')
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .send({"students" : [{email: "student@student.com"}]});
  t.is(res.status, 200)
});

test.serial('Check drop student from course', async t => {
  t.plan(1);
  const res = await request(app)
    .delete('/api/course/courseTitle/students')
    .send({"students" : [{email: "student@student.com"}]})
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .set('Accept', 'application/json');
  t.is(res.status, 200)
});

test.serial('Check delete course (Unauthorized)', async t => {
  t.plan(1);

  const res = await request(app)
    .delete('/api/course')
    .send({
      title: 'courseTitle'
    })
    .set('Accept', 'application/json');
  t.is(res.status, 401);
});

test.serial('Check delete course', async t => {
  t.plan(1);

  const res = await request(app)
    .delete('/api/course')
    .send({
      title: 'courseTitle'
    })
    .set('Cookie', 'sessionID=9abc2e1e1eaf65d72324e024dead0f1e;')
    .set('Accept', 'application/json');
  t.is(res.status, 200);
});
