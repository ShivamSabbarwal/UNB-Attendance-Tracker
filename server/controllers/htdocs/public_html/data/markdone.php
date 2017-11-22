<?php
  require_once("/checkcookie.php");
  $dir = 'textfiles';
  $file = "postdata.txt";

  if(file_exists($dir . "/" . $file)){
   $profiles = unserialize(file_get_contents($dir . "/" . $file));
  }
  if($profiles[$_GET["email"]][$_GET["key"]]["done"] == false){
    $profiles[$_GET["email"]][$_GET["key"]]["done"] = true;
  }else{
    $profiles[$_GET["email"]][$_GET["key"]]["done"] = false;
  }

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
