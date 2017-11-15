define({ "api": [
  {
    "type": "post",
    "url": "course",
    "title": "Create course",
    "group": "Course",
    "description": "<h2>Admin only method that creates a course and corresponding course grid.</h2>",
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
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the course (must be unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>Defines what term the course falls in</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer[]",
            "optional": false,
            "field": "gridsize",
            "description": "<p>X by Y grid for the seating arrangement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "time",
            "description": "<p>Time and days in which the course falls</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "courseGrid",
            "description": "<p>Array containing the course grid as specified by the professor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailTemplate",
            "description": "<p>Template of the emails that this course will send to students</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer[]",
            "optional": false,
            "field": "numDays",
            "description": "<p>Number of days a student can miss for this class</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Example",
          "content": "    {\n    \t\"title\": \"Class101\",\n    \t\"term\": \"Fall 2017\",\n    \t\"gridsize\": [3,2],\n\t      \"time\": \"TTh 10:30-11:20am\",\n    \t\"courseGrid\": [[\"\",\"\",\"\"],\n     \t[\"\",\"\",\"\"]],\n\t      \"emailTemplate\": \"You have missed too much class.\",\n\t      \"numDays\": [5]\n    }",
          "type": "json"
        },
        {
          "title": "Header Example",
          "content": "{\n  Content-Type: application/json\n  Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Course created successfully</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>required arguments are missing, or course title contains invalid characters, or gridsize is &lt;= 1, or title is already taken</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>session is not valid or the user is not an admin</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controllers/course.controller.js",
    "groupTitle": "Course",
    "name": "PostCourse"
  },
  {
    "type": "get",
    "url": "logout",
    "title": "Logout",
    "group": "User",
    "description": "<h2>Logout from current session</h2> <ul> <li>logging out will remove the session record from the database</li> <li>takes no parameters</li> </ul>",
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
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Header Example",
          "content": "{\n  Content-Type: application/json\n  Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Session removed successfully</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>The provided session was not successfully removed from the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controllers/login.controller.js",
    "groupTitle": "User",
    "name": "GetLogout"
  },
  {
    "type": "post",
    "url": "login",
    "title": "Login",
    "group": "User",
    "description": "<h2>Login with username &amp; password, or session</h2> <ul> <li>username and password are not checked (and not needed) if a valid session is provided.</li> <li>username and isAdmin are NOT returned if the session is valid.</li> </ul>",
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
      }
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
        },
        {
          "title": "Header Example",
          "content": "{\n  Content-Type: application/json\n  Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f\n}",
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
    "groupTitle": "User",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "signup",
    "title": "Signup",
    "group": "User",
    "description": "<h2>Create account for new user</h2>",
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
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username provided by the user (must be unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password provided by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email provided by the user, without @unb.ca (must be unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "defaultValue": "False",
            "description": "<p>Whether user is an admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Example",
          "content": "{\n  \"usename\": \"administrator\",\n  \"password\": \"entropy\",\n  \"email\": \"admin.01\",\n  \"isAdmin\": True\n}",
          "type": "json"
        },
        {
          "title": "Header Example",
          "content": "{\n  Content-Type: application/json\n  Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>User created successfully</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>required arguments are missing, or password is length is not &gt;=6 &amp; &lt;=20 characters, or user could not be created (username or email may be taken)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>user not created, but no error thrown by the database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/controllers/login.controller.js",
    "groupTitle": "User",
    "name": "PostSignup"
  }
] });