//define functions here

function getIt(){
    $("p").on("click", function(){
        alert("Hey!")
    });
}

function frameIt(){
    $("img").on("load", function(){
         $("img").addClass("tasty")
    });
}

function pressIt()
{
  $("#typing").on("keydown", function(e){
    if (e.key.toLowerCase() === "g")
    {
      alert('G');
    }
  });
}

 function submitIt()
{
  $("form").on("submit", alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
