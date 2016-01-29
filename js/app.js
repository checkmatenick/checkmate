// var check = prompt("Who would win in a fight..\n\nJimmy or Nick?", "");
var button = (".button");
var password = "rip peter";
var jimmyCount = 0;
var nickCount = 0;


 $( window ).ready(function() {
        $("#text").delay("slow").fadeIn(2000);
    });
    

$( ".button" ).click(function() {
    prompt("Who would win in a fight\n\nJimmy or Nick?", "");
});

var compare = function(userAnswer, password) {
    if(userAnswer =! password) {
        alert("Nope");
    }
}
  