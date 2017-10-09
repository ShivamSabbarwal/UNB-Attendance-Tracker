

function generateSessionID() {
  // generate a random 128-bit ID, save it to the session database
  return '22f5832147f5650c6a1a999fbd97695d';
}

/**
* Check if the current sessionID is correct and is still valid
*/
function checkSession(username, sessionID) {
  // TODO: This should be replaced by database lookup
  const userlist = [
    {
      username: 'admin',
      sessionID: '22f5832147f5650c6a1a999fbd97695d',
    }];
  const user = userlist.filter((userData) => {
    return userData.username === username;
  })[0];
  if (user === undefined) return false;
  return user.sessionID === sessionID;
}

/**
* Check if User's credentials are correct
*/
function checkCredentials(username, password) {
  // TODO: This should be replaced by a database lookup
  const userlist = [
    {
      username: 'admin',
      password: 'password',
    }];
  const user = userlist.filter((userData) => {
    return userData.username === username;
  })[0];
  if (user === undefined) return false;
  return user.password === password;
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
      res.cookie('sessionID', generateSessionID(), { maxAge: 10800 });
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  }
}
