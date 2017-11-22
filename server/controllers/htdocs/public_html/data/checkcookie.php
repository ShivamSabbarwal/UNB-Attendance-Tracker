<?php

if(!isset($_COOKIE["email"])){
  $newURL = 'http://localhost/public_html/login.php';
  header('Location: '.$newURL);
  exit();
}

?>
