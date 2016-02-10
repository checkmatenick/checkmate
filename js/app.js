        // Variables

var button = (".button");
var password = "p";
var jimmyCount = 0;
var nickCount= 0;

    // Title

 $(window).ready(function() {
        $("#text").delay(2000).fadeIn(2000);
    });

// Compare

var compare = function(userAnswer) {
  if (userAnswer != password) {
    alert("You chose poorly");
  }
  else {
    $("#jimmyMinus").click(function() { jimmyCount -= 1});
    $("#jimmyPlus").click(function() { jimmyCount += 1});
    $("#nickMinus").click(function() { nickCount -= 1});
    $("#nickPlus").click(function() { nickCount += 1});
    $("#jimmyScore").replaceWith('<p class=/"scoreText number/">'+jimmyCount+'</p>');
    $('#nickScore').replaceWith('<p class=/"scoreText number/">'+nickCount+'</p>');
  }  
}

// Password Prompt

$( ".button" ).click(function() {
  var userAnswer = prompt("Who would win in a fight..\n\nJimmy or Nick?", "");
  console.log(userAnswer);
  compare(userAnswer);
}); 

// Storage

/*
var jimmyCount = document.getElementById('jimmyScore');
var nickCount = document.getElementById('nickScore');

jimmyCount.value = localStorage.getItem('jimmyScore');
nickCount.value = localStorage.getItem('nickScore');

jimmyCount.addEventListener(jimmyCount, function() {
    localStorage.setItem('jimmyScore', jimmyCount.value);
}, false);

nickCount.addEventListener(nickCount, function() {
    localStorage.setItem('nickScore', nickCount.value);
}, false);

*/

