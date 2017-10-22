import Session from '../models/session';
import User from '../models/user';

exports.isValidSession = function(session_id){
  return new Promise(function (fulfill, reject){
    var age = undefined;
    Session.findOne(
      { 'sessionId': session_id },  // sessionId should match arguments
      'timestamp',    // should return timestamp
      function (err, session) {
        if (err) {
          console.error(err);
          reject(false);
        } else {
          //console.log('QUERY -- session record returned: ' + session.timestamp +' | data type: ' + (typeof session.timestamp));
          if(session){
            var age = Date.now() - session.timestamp.getTime();
            fulfill(age < 10800000); //fails if session is > 3hrs old
          } else {
            fulfill(false);
          }
        }
      }
    ).sort({'timestamp': -1}); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
  })
};

exports.isAdmin = function(session_id){
  return new Promise(function (fulfill, reject){
    Session.findOne(
      { 'sessionId': session_id },  // sessionId should match arguments
      'username',    // should return username
      function (err, session) {
        if (err) {
          console.error(err);
          reject(false);
        } else {
          if(session){
            User.findOne(
              { 'username': session.username },  // sessionId should match arguments
              'isAdmin',    // should return username
              function (err, user) {
                if (err) {
                  console.error(err);
                  reject(false);
                } else {
                  if(user){
                    fulfill(user.isAdmin)
                  } else {
                    fulfill(false);
                  }
                }
              }
            ).sort({'timestamp': -1});
          } else {
            fulfill(false);
          }
        }
      }
    ).sort({'timestamp': -1}); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
  })
};
