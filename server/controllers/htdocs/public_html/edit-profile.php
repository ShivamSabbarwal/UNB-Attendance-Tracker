<?php
    // load up your config file
    require_once("../resources/config.php");

    require_once(TEMPLATES_PATH . "/header.php");
    require_once("data/checkcookie.php");

    $email_handle = fopen("data/textfiles/email.txt", "r");
    while (!feof($email_handle)) {
       $email = fgets($email_handle);
    }
    fclose($email_handle);

    $email = "email";

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
                  "interests" => "N/A"
                  ];
    }
?>
<head>
  <link rel="stylesheet" type="text/css" href="css/profile.css">
</head>
<div id="container">
  <form id="editProfile" action="data/storeprofile.php" method="POST">
    <div id="side-panel">
      <div id="avatar-panel">
        <img src="img/content/avatar.png"/>
      </div>
      <div id="contact-panel">
        <span id="contact-title">Contact Information</span>
        <p id="contact-body">Phone:<input type="text" name="phone" id="phone" value="<?php echo $profile["phone"]; ?>"><br><br>
                             Email:<input type="text" name="email" id="email" value="<?php echo $profile["email"]; ?>"><br><br>
                             Preferred Contact: <div><input type="radio" name="prefContact" value="Phone" <?php if($profile["prefContact"] == "Phone"){echo "checked";} ?>>Phone
                                                <input type="radio" name="prefContact" value="Email" style="text-align:right;" <?php if($profile["prefContact"] == "Email"){echo "checked";} ?>>Email</div><br>
        </p>
      </div>
    </div>
    <div id="content">
      <span id="content-title"> Hello, <?php echo explode("@",$_COOKIE[$email])[0]; ?>!</span>
      <section id="content-boxes">
        <div>
          <span class="box-title">About You</span>
          <p>Date of Birth:<input type="date" name="dob" id="dob" value="<?php echo $profile["dob"]; ?>"><br><br>
             Work:<input type="text" name="work" id="work" value="<?php echo $profile["work"]; ?>"><br><br>
             Language(s):<input type="text" name="lang" id="lang" value="<?php echo $profile["lang"]; ?>"><br></p>
        </div>
        <div>
          <span class="box-title">Education</span>
          <p><textarea name="education" form="editProfile"><?php echo $profile["education"]; ?></textarea></p>
        </div>
        <div>
          <span class="box-title">Interests</span>
          <p><textarea name="interests" form="editProfile"><?php echo $profile["interests"]; ?></textarea></p>
        </div>
        <input type="submit" value="Save Changes"><br><br><br><br>
      </section>
    </div>
  </form>
</div>
