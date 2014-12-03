//to be filled out as needed later

$(document).ready(function() {
  
  //$("main").on("mouseover", "main", function(){
  //  4(this).css({"background-color": "blue"});
  //});
  
  var editMode = false;
  //set up the button toggle to show the form and hide the main
  $("button").on("click", function() {
    //check state via editMode
    if(editMode === true) {
      //if true, hide form and show main
      $("form").hide();
      $("main").show();
      //take data from textarea and put it into main
      $("main").html($("textarea").val());
      //set bool to false
      editMode = false;
    }else{
      //if false, show form and hide main
      $("form").show();
      $("main").hide();
      //take data from main and put it into textarea
      $("textarea").val($("main").html());
      //set bool to true
      editMode = true;
    }
  });
});