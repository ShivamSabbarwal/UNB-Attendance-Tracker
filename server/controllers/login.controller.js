var mongoose = require('mongoose');
require('../models/session');
require('../models/user')
var SessionSchema = require('mongoose').model('Session').schema;
var UserSchema = require('mongoose').model('User').schema;

var bigrandom = require('bigrandom');

/**
* generate a random 128-bit ID, save it to the session database
*/
function generateSessionID(username) {
  var Session = mongoose.model('Session', SessionSchema);

  var random128bitHexString = bigrandom();
  console.log("randKey: " + random128bitHexString)

  // TODO: Needs to create new record
    // check if exists in session table  (may not need to sort checkSession query results if we avoid duplicates by checking here)

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
      } else {
        console.log('session record created: ' + data +' | data type: ' + (typeof data));
      }
    }
  );

  // return '22f5832147f5650c6a1a999fbd97695d';
  return random128bitHexString
}

/**
* Check if the current sessionID is correct and is still valid
*/
function checkSession(username, sessionID) {
  // TODO: Needs to be tested againts database records, & proper return value is needed
  var Session = mongoose.model('Session', SessionSchema);

  Session.findOne(
    { 'username': username, 'sessionId': sessionID },  // username and sessionId should match arguments
    'timestamp',    // should return timestamp
    function (err, session) {
      if (err) {
        return console.error(err);
      }
      console.log('session record returned: ' + session +' | data type: ' + (typeof session));
    }
  ).sort({'timestamp': -1}); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
}

/**
* Check if User's credentials are correct
*/
function checkCredentials(username, password) {
  // TODO: Needs to be tested againts database records, & proper return value is needed
  var User = mongoose.model('User', UserSchema);

  User.findOne(
    { 'username': username, 'password': password},  // username and password should match arguments
    'isAdmin',   //doesn't really matter what value we get back since we aren't using it (just need to see if record exists, theres probably a better way (count()))
    function (err, user) {
      if (err) {
        return console.error(err);
      }
      console.log('user record returned: ' + user + ' | data type: ' + (typeof user));
    }
  );
}

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export function login(req, res) {
  // check if we are missing HTTP parameters
  if (!req.body.username || !req.body.password) {
    res.status(403).end();
  } else if (checkSession(req.body.username, req.cookies.sessionID)) {
    // check if the user already has a sessionID, they have already logged in -> proceed
    res.status(200).end();
  } else {
    // if the user hasn't logged in before, check their credentials and then generate a sessionID
    if (checkCredentials(req.body.username, req.body.password)) {
      // Generate a new session that is valid for 3 hours from now
      res.cookie('sessionID', generateSessionID(req.body.username), { maxAge: 10800 });
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  }
}
