var myFireBaseRef = new Firebase("https://luminous-fire-7526.firebaseio.com/");

myFireBaseRef.set({
    "players": {
        "jimmy" : {
            "score" : "0"
        },
        "nick" : {
            "score" : "0"
        }
    }
});

myFireBaseRef.set("Check", function(error) {
  if (error) {
      console.log("Data could not be saved " + error);
  } else {
      console.log("Data saved successfully.");
  }
};