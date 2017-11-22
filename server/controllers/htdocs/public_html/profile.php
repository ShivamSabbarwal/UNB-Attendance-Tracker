<?php
    // load up your config file
    require_once("../resources/config.php");

    require_once(TEMPLATES_PATH . "/header.php");
    require_once("data/checkcookie.php");

    $profiledata = unserialize(file_get_contents("data/textfiles/profiledata.txt"));
    if(isset($profiledata[$_COOKIE["email"]])){
      $profile = $profiledata[$_COOKIE["email"]];
    } else {
      $profile = [
                  "phone" => "N/A",
                  "email" => "N/A",
                  "prefContact" => "N/A",
                  "dob" => "N/A",
                  "work" => "N/A",
                  "lang" => "N/A",
                  "education" => "N/A",
                  "interests" => "N/A."
                  ];
    }
?>
<head>
  <link rel="stylesheet" type="text/css" href="css/profile.css">
</head>
<div id="container">
    <div id="side-panel">
      <div id="avatar-panel">
        <img src="img/content/avatar.png"/>
        <form action="./edit-profile.php">
            <input type="submit" id="editprofile-button" value="Edit Profile" />
        </form>
        <form action="./my-services.php">
            <input type="submit" id="myservices-button" value="My Services" />
        </form>
      </div>
      <div id="contact-panel">
        <span id="contact-title">Contact Information</span>
        <p id="contact-body">Phone: <?php echo $profile["phone"]; ?> <br><br>
                             Email: <?php echo $profile["email"]; ?>  <br><br>
                             Preferred Contact: <?php echo $profile["prefContact"]; ?> <br>
        </p>
      </div>
    </div>
    <div id="content">
      <span id="content-title"> Hello, <?php echo explode("@",$_COOKIE["email"])[0]; ?>!</span>
      <section id="content-boxes">
        <div>
          <span class="box-title">About You</span>
          <p>Date of Birth:<span class="databox"><?php echo $profile["dob"]; ?></span> <br><br>
             Work:<span class="databox"><?php echo $profile["work"]; ?></span> <br><br>
             Language(s):<span class="databox"><?php echo $profile["lang"]; ?></span> <br></p>
        </div>
        <div>
          <span class="box-title">Education</span>
          <p><?php echo $profile["education"]; ?></p>
        </div>
        <div>
          <span class="box-title">Interests</span>
          <p><?php echo $profile["interests"]; ?></p>
        </div>
      </section>
    </div>
</div>
