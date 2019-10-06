// Can keep this commented as this runs the function immediately
// $(document).ready(function(){
//   getWeather(searchQuery);
// })

function getWeather(searchQuery){ // notice variables are without type
  // Query parameters (i.e q = ___) are used to specify parts of the request
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;

  //clear previous prints from page
  $(".city").text("");
  $(".temp").text("");
  $(".error-message").text("");

  $.ajax(url,{success: function (data){ // ajax success handler
    // view logs in javascript console (Chrome->View->Developer->Console)
    console.log(data);
    // find object with class of 'city.'
    // take the data object returned by openWeatherMap, and replace the text of city class with the name 
    $(".city").text(data.name);
    // similar steps to get temperature from data object into the temp class
    $(".temp").text(data.main.temp);

  }, error: function(error){ // ajax error handler
    $(".error-message").text("An error occurred");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function handleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.email);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

/*
Key takeaways:
- Need to research Node.js and Express.js tutorials to get familiar
- Need to set up a webapp from scratch (don't forget to 'npm install' when doing so)
- Helper is used to includes references to css and js files needed for project's pages
*/