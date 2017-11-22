<?php
  require_once("/checkcookie.php");
  $dir = 'textfiles';
  $file = "postdata.txt";

  if(file_exists($dir . "/" . $file)){
   $profiles = unserialize(file_get_contents($dir . "/" . $file));
  }

  $curPost = $profiles[$_GET["email"]][$_GET["key"]];

  foreach ($_POST as $key => $value){
   $curPost[$key] = $value;
  }

  $profiles[$_GET["email"]][$_GET["key"]] = $curPost;
  
  $ret = file_put_contents($dir. "/" . $file, serialize($profiles));
  if($ret === false) {
    die('There was an error writing this file');
  }
  else {
    $newURL = 'http://localhost/public_html/my-services.php';
    header('Location: '.$newURL);
    die();
  }

?>
