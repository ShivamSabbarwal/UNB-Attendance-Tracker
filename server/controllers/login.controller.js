var mongoose = require('mongoose');
require('../models/session');
require('../models/user')
var SessionSchema = require('mongoose').model('Session').schema;
var UserSchema = require('mongoose').model('User').schema;

var bigrandom = require('bigrandom');

var async_f = require('asyncawait/async');
var await_f = require('asyncawait/await');

/**
* generate a random 128-bit ID, save it to the session database
*/
function generateSessionID(username) {
  var Session = mongoose.model('Session', SessionSchema);

  var random128bitHexString = bigrandom();

  // TODO: Needs to check if a session with this 128-bit number already exists

  // make new entry
  var session_data = {
    'username': username,
    'sessionId': random128bitHexString
  };

  var session = new Session(session_data);
  session.save(
    function(err, data){
      if (err){
        console.error(err)
      }
    }
  );

  return random128bitHexString;
}

/**
* Check if the current sessionID is correct and is still valid
*/
var checkSession = async_f( function(sessionID) {
  var Session = mongoose.model('Session', SessionSchema);
  var age = undefined;
  var isValid = false;

  var session = await_f(
    Session.findOne(
      { 'sessionId': sessionID },  // username and sessionId should match arguments
      'timestamp',    // should return timestamp
      function (err, session) {
        if (err) {
          console.error(err);
        }
      }
    )
  )

  if(session){
    age = Date.now() - session.timestamp.getTime();
    isValid = age < 10800000; //fails if session is > 3hrs old
  }

  return isValid
})

/**
* Check if User's credentials are correct
* If correct, return isAdmin too
*/
var checkCredentials = async_f( function(username, password) {
  var User = mongoose.model('User', UserSchema);
  var result = [];

  var user = await_f(
    User.findOne(
      { 'username': username, 'password': password},  // username and password should match arguments
      'isAdmin',
      function (err, user) {
        if (err) {
          console.error(err);
        }
      }
    )
  )

  if (user) {
    result = [true, user.isAdmin];

  } else {
    result = [false, ,];
  }

  return result;
})

/*
* removes all sessions that are more than three hours old
*/
var clearOldSessions = async_f( function() {
  var Session = mongoose.model('Session', SessionSchema);
  var threeHoursOld = new Date()

  threeHoursOld.setHours(threeHoursOld.getHours()-3)

  await_f(
    Session.remove(
      {'timestamp': {$lt:threeHoursOld}},
      function(err, result) {
        if(err) {
          console.error(err);
        }
      }
    )
  );
})

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export var login = async_f(function(req, res) {
  //clear sessions older than 3 hrs
  await_f(clearOldSessions());

  var sessionResult = await_f(checkSession(req.cookies.sessionID))
  // check if the user already has a sessionID, they have already logged in -> proceed
  if (sessionResult) {
    res.status(200).end();

  } else if (!req.body.username || !req.body.password) {
    res.status(403).end();

  } else { // if the user hasn't logged in before, check their credentials and then generate a sessionID
    var credResult = await_f(checkCredentials(req.body.username, req.body.password));

    if(credResult[0] === true){
      res.cookie('sessionID', generateSessionID(req.body.username), { maxAge: 10800 });
      res.send({
        isAdmin: credResult[1]
      });
      res.status(200).end();

    } else {
      res.status(401).end();
    }
  }
})

export function logout(req, res) {
  var Session = mongoose.model('Session', SessionSchema);
  if (req.cookies.sessionID !== null) {
    Session.remove({ 'sessionId': req.cookies.sessionID }, function(err) {
    if (!err) {
          res.status(200).end();
    }
    else {
          res.status(400).end();
    }
  });
  }
}
