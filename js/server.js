var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var jimmyScore = '<p class="scoreText number">';
        var nickScore = '<p class="scoreText number">';
        if (xhr.status === 200) {
            
            // Find number from database
           
            
        document.getElementById('jimmyMinus').addEventListener( "click", function() { 
    myFireBaseRef.child("players/jimmy/score").on("value", function() {
        score -= 1;
        console.log(score);
    })
        });
                                                  
        document.getElementById('jimmyPlus').addEventListener( "click", function() { 
    myFireBaseRef.child("players/jimmy/score").on("value", function() {
        score += 1;
        console.log(score);
    })
        });
        
     
            document.getElementById('nickMinus').addEventListener( "click", function() { //score - 1};                                     
            document.getElementById('nickPlus').addEventListener( "click", function() { //score + 1}; 


                                                                
                jimmyScore += score + "</p>";
                nickScore += score + "</p>";
            }
                
}
        
    }
};

           // Callback?       

myFireBaseRef.child("players/jimmy/score").on("value", function(snapshot) {
    console.log(snapshot.val());