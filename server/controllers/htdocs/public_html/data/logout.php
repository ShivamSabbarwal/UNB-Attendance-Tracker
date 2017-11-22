<?php
  $email = "email";
  setcookie($email, "", time() - 3600, "/");
  $newURL = 'http://localhost/public_html/login.php';
  header('Location: '.$newURL);
  die();
?>
