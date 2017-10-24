var mongoose = require('mongoose');
require('../models/session');
require('../models/user')
var SessionSchema = require('mongoose').model('Session').schema;
var UserSchema = require('mongoose').model('User').schema;

var bigrandom = require('bigrandom');

/**
*
* @param req
* @param res
* @returns void
*/
export function generateUserAccount(req, res) {
  var User = mongoose.model('User', UserSchema);

  if(!req.body.username || !req.body.password || !req.body.email) {
    res.status(403).send("Username, email, and password are requiered.");
  }else if((req.body.password).length < 6 || (req.body.password).length > 20){
    res.status(403).send("Password must be at least 6 characters in length, but less than 20.");
  } else {
    var user_data = {
      'username': req.body.username,
      'password': req.body.password,
      'email': req.body.email,
      'isAdmin': req.body.isAdmin
    };
    var user = new User(user_data);
    user.save(
      function(err, data){
        if (err){
          console.error(err)
          res.status(403).end()
        } else if (data){
          res.status(200).end()
          //console.log('session record created: ' + data +' | data type: ' + (typeof data));
        } else {
          res.status(400).end()
        }
      }
    );
  }

}
/**
* generate a random 128-bit ID, save it to the session database
*/
function generateSessionID(username) {
  var Session = mongoose.model('Session', SessionSchema);

  var random128bitHexString = bigrandom();

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
        //console.log('session record created: ' + data +' | data type: ' + (typeof data));
      }
    }
  );

  // return '22f5832147f5650c6a1a999fbd97695d';
  return random128bitHexString;
}

/**
* Check if the current sessionID is correct and is still valid
*/
function checkSession(sessionID, callback) {
  // TODO: Needs to be tested againts database records, & proper return value is needed
  var Session = mongoose.model('Session', SessionSchema);
  var age = undefined;

  Session.findOne(
    { 'sessionId': sessionID },  // username and sessionId should match arguments
    'timestamp',    // should return timestamp
    function (err, session) {
      if (err) {
        console.error(err);
        callback(false);
      }
      //console.log('QUERY -- session record returned: ' + session.timestamp +' | data type: ' + (typeof session.timestamp));
      if(session){
        var age = Date.now() - session.timestamp.getTime();
        callback(age < 10800000); //fails if session is > 3hrs old
      } else {
        callback(false);
      }
    }
  ).sort({'timestamp': -1}); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
}

/**
* Check if User's credentials are correct
*/
function checkCredentials(username, password, callback) {
  // TODO: Needs to be tested againts database records, & proper return value is needed
  var User = mongoose.model('User', UserSchema);

  User.findOne(
    { 'username': username, 'password': password},  // username and password should match arguments
    function (err, user) {
      if (err) {
        console.error(err);
        callback(false, null);
      }
      //console.log('user record returned: ' + user +' | data type: ' + (typeof user));
      if(user){
        callback(true, user);
      } else {
        callback(false, null);
      }
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
    // if the user hasn't logged in before, check their credentials and then generate a sessionID
    checkSession(req.cookies.sessionID, (sessionIsValid) => {
      if (sessionIsValid === true) {
        // check if the user already has a sessionID, they have already logged in -> proceed
        res.status(200).end();
      } else {
        if (!req.body.username || !req.body.password) {
          res.status(403).end();
        } else {
          checkCredentials(req.body.username, req.body.password, (credsAreValid, user)=> {
            console.log(user)
            if (credsAreValid === true && user !== null) {
              // Generate a new session that is valid for 3 hours from now
              res.cookie('sessionID', generateSessionID(req.body.username), { maxAge: 10800 });
              res.status(200).send({
                username: user.username,
                isAdmin: user.isAdmin
              });
            } else {
              res.status(401).end();
            }
          })
        }
      }
    })
}

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
