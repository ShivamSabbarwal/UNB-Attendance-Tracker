<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../../public_html/css/navstyle.css">
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>UNB SSA</title>
</head>

<body>
  <img src="../../public_html/img/content/logo.png" width="45px" height="25px" style="position: absolute; left: 14px; top:10px;">
  <img src="../../public_html/img/content/logo.png" width="45px" height="25px" style="position: absolute; left: 14px; top:10px;">
  <div class="nav">
    <ul>
      <li class="home"><a href="<?php $_SERVER["DOCUMENT_ROOT"]?>/public_html/community.php">Community</a></li>
      <li class="tutorials"><a href="<?php $_SERVER["DOCUMENT_ROOT"]?>/public_html/about.php">About UNBSSA</a></li>
      <li class="about"><a href="<?php $_SERVER["DOCUMENT_ROOT"]?>/public_html/service-board.php">Service Board</a></li>
      <li class="news"><a href="<?php $_SERVER["DOCUMENT_ROOT"]?>/public_html/profile.php">Profile</a></li>
      <li class="contact"><a href="<?php $_SERVER["DOCUMENT_ROOT"]?>/public_html/data/logout.php">Logout</a></li>
    </ul>
  </div>
  <div class="page-title">
    <?php
      $url = $_SERVER['REQUEST_URI'];
      $display_bar = false;
      if(stripos($url,'community') !== false){
        echo 'Community Updates';
        $display_bar = true;
      }elseif (stripos($url,'about') !== false){
        echo 'About';
        $display_bar = true;
      }elseif (stripos($url,'service-board') !== false){
        echo 'Service Board';
        $display_bar = true;
      }elseif (stripos($url,'profile') !== false){
        echo 'Profile';
        $display_bar = true;
      }elseif (stripos($url,'edit-profile') !== false){
        echo 'Edit Profile';
        $display_bar = true;
      }elseif (stripos($url,'my-services') !== false){
        echo 'My Services';
        $display_bar = true;
      }
    ?>
  </div>
  <hr style="margin: 0 30px 0 30px;">
</body>
