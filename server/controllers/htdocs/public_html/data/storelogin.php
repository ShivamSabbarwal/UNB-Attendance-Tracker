<?php
 $dir = 'textfiles';

 // create new directory with 744 permissions if it does not exist yet
 // owner will be the user/group the PHP script is run under
 if ( !file_exists($dir) ) {
     $oldmask = umask(0);  // helpful when used in linux server
     mkdir ($dir, 0744);
 }

if(isset($_POST['email'])) {
    $data = $_POST['email'];
    $ret = file_put_contents($dir.'/email.txt', $data);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
      $newURL = 'http://localhost/public_html/community.php';
      header('Location: '.$newURL);
      die();
    }
}
else {
   die('no post data to process');
}

?>
