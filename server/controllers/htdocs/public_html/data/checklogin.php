<?php
 $dir = 'textfiles';

 // create new directory with 744 permissions if it does not exist yet
 // owner will be the user/group the PHP script is run under
 if ( !file_exists($dir) ) {
     $oldmask = umask(0);  // helpful when used in linux server
     mkdir ($dir, 0744);
 }

if(isset($_POST['email'])) {
    $emailfield = $_POST['email'];
    $passfield = $_POST['pword'];
    $handle = fopen($dir.'/email.txt', 'r');
    $emailFound = false;
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
          $logindetails = explode(":", $line);
          $curemail = $logindetails[0];
          $curpass = $logindetails[1];
          $curpass = rtrim($curpass); //trim end line characters for proper comparison
            if( $curemail == $emailfield){
              $emailFound = true;
              if($curpass == $passfield){
                setcookie("email", $curemail, time() + (10800), "/");
                $newURL = 'http://localhost/public_html/community.php';
                header('Location: '.$newURL);
                die();
              } else {
                $newURL = 'http://localhost/public_html/login.php';
                header('Location: '.$newURL);
              }
            }
        }
      }
      if($emailFound !== true) {
        $newURL = 'http://localhost/public_html/login.php';
        header('Location: '.$newURL);
      }

      fclose($handle);
} else {
    die('No email field to check.');
}

?>
