<?php
    // load up your config file
    require_once("../resources/config.php");

?>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script>
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
     }

     function continueOrNot() {
        if(validateEmail(document.getElementById('emailfield').value) && document.getElementById('passfield').value.length >= 6){
          return true;
        }else{
          if(validateEmail(document.getElementById('emailfield').value) === false){
            alert("Email not valid.");
          }else if(document.getElementById('passfield').value.length < 6){
            alert("Password must be at least 6 characters in length.");
          }
          return false;
        }
      }
    </script>
    <title>UNB SSA</title>
</head>
<div id="container">
    <div id="content">
        <div id="logo"><img src="img/content/logo.png" height="125" width="200"></img></div>
        <div id="login-info">
          <span id="title">UNB Student-Senior Alliance</span><p>
          <form id="login" action="data/checklogin.php" method="POST" onsubmit="return continueOrNot();">
            Email: <input type="text" name="email" id="emailfield"><br>
            Password: <input type="password" name="pword" id="passfield"><br><p>
            <span id="instructions">Please enter your email and password assigned to you by the UNB Student Senior Alliance administration team.</span><p>
            <input type="submit" value="Login">
          </form>
        </div>
    </div>
</div>
