<?php
    // load up your config file
    require_once("../resources/config.php");
    require_once(TEMPLATES_PATH . "/header.php");
    include_once(TEMPLATES_PATH . "/posting.php");
    require_once("data/checkcookie.php");

    $allposts = [];
    if(file_exists("data/textfiles/postdata.txt")){
     $allposts = unserialize(file_get_contents("data/textfiles/postdata.txt"));
    }

?>
<head>
  <link rel="stylesheet" type="text/css" href="css/service-board.css">
</head>


<div id="container">
    <div id="content">
      <div id="postings-div">
        <span id="service-title">Available Postings</span>
        <div id="postings">
          <?php
          if(!empty($allposts)){
            foreach($allposts as $key => $value){
              foreach($value as $key1 => $value1){
                if($value1["done"] == false){
                  createPost($key, $key1, $value1);
                }
              }
            }
          }
          ?>
        </div>
      </div>
        <!-- Trigger/Open The Modal -->
        <button class="button" id="myBtn">Create Service</button>

        <button class="button" onClick="document.location.href='./my-services.php'" />Go to My Services</button>
        <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <form id="newPost" action="data/storepost.php" method="POST">
            Posting Title:&nbsp;<span><input type="text" name="postTitle" class="textbox"></span><br><br>
            Respond By:&nbsp;<span><input type="date" name="respond-date" class="textbox"></span><br><br>
            <p><textarea name="postDesc" form="newPost"></textarea></p>
            <input class="postButton" type="submit" value="Post">
          </form>
          </div>

        </div>
        <script>
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        </script>
    </div>
</div>
