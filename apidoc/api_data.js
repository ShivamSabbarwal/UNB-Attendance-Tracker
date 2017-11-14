define({ "api": [
  {
    "type": "post",
    "url": "login",
    "title": "Login with username & password, or session",
    "name": "login",
    "group": "Login",
    "description": "<ul> <li>username and password are not checked (and not needed) if a valid session is provided.</li> <li>username and isAdmin are NOT returned if the session is valid.</li> </ul>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Cookie",
            "description": "<p>session cookie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n  Content-Type: application/json\n  Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username provided by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password provided by the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Example",
          "content": "{\n  \"username\": \"admin\",\n  \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username (only returned if valid session was not provided)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>Users isAdmin property (only returned if valid session was not provided)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful login with credentials",
          "content": "HTTP 200 OK\n{\n  \"username\": \"admin\",\n  \"isAdmin\": True\n}",
          "type": "json"
        },
        {
          "title": "Successful login with sessionID",
          "content": "HTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Username or password was not provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Login unsuccessful</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controllers/login.controller.js",
    "groupTitle": "Login"
  }
] });
