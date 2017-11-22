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
        <span id="service-title">Active Postings</span>
        <div id="postings">
          <?php
          if(!empty($allposts)){
            foreach($allposts as $key => $value){
              if($key === $_COOKIE['email']){
                foreach($value as $key1 => $value1){
                  createOwnPost($key, $key1, $value1);
                }
              }
            }
          }
          ?>
        </div>
      </div>
        <!-- Trigger/Open The Modal -->
        <button class="button" id="createBtn">Create Service</button>
        <!-- The Modal -->
        <div id="createModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" id="createclose">&times;</span>
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
        var createmodal = document.getElementById('createModal');

        // Get the button that opens the modal
        var createbtn = document.getElementById("createBtn");

        // Get the <span> element that closes the modal
        var createspan = document.getElementById("createclose");

        // When the user clicks the button, open the modal
        createbtn.onclick = function() {
            createmodal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        createspan.onclick = function() {
            createmodal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == createmodal) {
                createmodal.style.display = "none";
            }
        }
        </script>
    </div>
</div>
