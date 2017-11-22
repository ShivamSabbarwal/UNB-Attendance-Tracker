<?php
  // load up your config file
  require_once("../resources/config.php");

  function checkDone($author, $key){

    if(file_exists("../public_html/data/textfiles/postdata.txt")){
     $posts = unserialize(file_get_contents("../public_html/data/textfiles/postdata.txt"));
    }

    $curPostStatus = $posts[$author][$key]["done"];

    if($curPostStatus == false){
      return false;
    }else{
      return true;
    }
  }

  function createPost($author, $postid, $input)
  {
    foreach($input as $key => $value){
      $data[] = $value;
    }
    echo "<div class='post'>
            <div class='post-info'>
              <div>
                <b>Title:</b><br>
                <b>Author:</b><br>
                <b>Respond By:</b><br>
              </div>
              <div>
                <span class='post-title'> $data[0]</span><br>
                <span class='post-author'> $author</span><br>
                </b><span class='post-date'> $data[1]</span><br>
              </div>
            </div>
            <hr style=\"margin-left: 10px; margin-right: 10px;\">
            <div class='post-desc'>$data[2]</div>
            <div class='buttondiv'>
              <hr style=\"margin-right: 20px;\">
              <button class=\"postbutton\" onClick=\"document.location.href='./my-services.php'\" />Respond to Service</button>
              <button class=\"postbutton\" onClick=\"document.location.href='./my-services.php'\" />View Poster Profile</button>
            </div>
          </div>";
  }
  function createOwnPost($author, $postid, $input)
  {
    foreach($input as $key => $value){
      $data[] = $value;
    }
    if(checkDone($author,$postid) == true){
      $markAs = "Mark not Done";
    }else{
      $markAs = "Mark as Done";
    }
    echo "<div class='post'>
            <div class='post-info'>
              <div>
                <b>Title:</b><br>
                <b>Author:</b><br>
                <b>Respond By:</b><br>
              </div>
              <div>
                <span class='post-title'> $data[0]</span><br>
                <span class='post-author'> $author</span><br>
                </b><span class='post-date'> $data[1]</span><br>
              </div>
            </div>
            <hr style=\"margin-left: 10px; margin-right: 10px;\">
            <div class='post-desc'>$data[2]</div>
            <div class='buttondiv'>
              <hr style=\"margin-right: 20px;\">

              <button class=\"postbutton\" id=\"editBtn-$postid\">Edit Posting</button>
              <!-- The Modal -->
              <div id=\"myModal-$postid\" class=\"modal\">

                <!-- Modal content -->
                <div class=\"modal-content\">
                  <span id=\"close-$postid\" class=\"close\">&times;</span>
                  <form id=\"editPost-$postid\" action=\"data/editpost.php?email=$author&key=$postid\" method=\"POST\">
                  Posting Title:&nbsp;<span><input type=\"text\" name=\"postTitle\" class=\"textbox\" value=\"$data[0]\"></span><br><br>
                  Respond By:&nbsp;<span><input type=\"date\" name=\"respond-date\" class=\"textbox\" value=\"$data[1]\"></span><br><br>
                  <p><textarea name=\"postDesc\" form=\"editPost-$postid\">$data[2]</textarea></p>
                  <input class=\"postButton\" type=\"submit\" value=\"Post\">
                </form>
                </div>

              </div>
              <script>
              // Get the modal
              var modal$postid = document.getElementById(\"myModal-$postid\");

              // Get the button that opens the modal
              var btn$postid = document.getElementById(\"editBtn-$postid\");

              // Get the <span> element that closes the modal
              var span$postid = document.getElementById(\"close-$postid\");

              // When the user clicks the button, open the modal
              btn$postid.onclick = function() {
                  modal$postid.style.display = \"block\";
              }

              // When the user clicks on <span> (x), close the modal
              span$postid.onclick = function() {
                  modal$postid.style.display = \"none\";
              }

              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                  if (event.target == modal$postid) {
                      modal$postid.style.display = \"none\";
                  }
              }
              </script>
              <button class=\"postbutton\" onClick=\"document.location.href='./data/markdone.php?email=$author&key=$postid'\" />$markAs</button>
            </div>
          </div>";
  }
?>
