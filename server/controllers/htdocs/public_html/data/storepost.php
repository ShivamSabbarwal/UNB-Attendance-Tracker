<?php
  require_once("/checkcookie.php");
  $dir = 'textfiles';

  // create new directory with 744 permissions if it does not exist yet
  // owner will be the user/group the PHP script is run under
  if ( !file_exists($dir) ) {
     $oldmask = umask(0);  // helpful when used in linux server
     mkdir ($dir, 0744);
  }
  $file = "postdata.txt";
  $profiles = [];
  if(file_exists($dir . "/" . $file)){
   $profiles = unserialize(file_get_contents($dir . "/" . $file));
  }

  if($profiles[$_COOKIE['email']] == NULL) {
   $profiles[$_COOKIE['email']][] = [];
   $lastElementKey = -1;
 }else{
   $lastElementKey = array_pop(array_keys($profiles[$_COOKIE['email']]));
 }

  foreach ($_POST as $key => $value){
   $profiles[$_COOKIE['email']][$lastElementKey+1][$key] = $value;
  }
  $profiles[$_COOKIE['email']][$lastElementKey+1]['done'] = false;
  
  $ret = file_put_contents($dir. "/" . $file, serialize($profiles));
  if($ret === false) {
    die('There was an error writing this file');
  }
  else {
    $newURL = 'http://localhost/public_html/service-board.php';
    header('Location: '.$newURL);
    die();
  }

?>
