$(document).ready(function(){
  getWeather();
})

function getWeather(){
  // Query parameters (i.e q = ___) are used to specify parts of the request
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&APPID="+apiKey;

  // ajax was imported in code at start in head.ejs
  $.ajax(url,{success: function (data){
    
    // view logs in javascript console (Chrome->View->Developer->Console)
    console.log(data);
    
    // find object with class of 'city.'
    // take the data object returned by openWeatherMap, and replace the text of city class with the name 
    $(".city").text(data.name);

    // similar steps to get temperature from data object into the temp class
    $(".temp").text(data.main.temp);
  }})
}

/*
Key takeaways:
- Need to research Node.js and Express.js tutorials to get familiar
- Need to set up a webapp from scratch (don't forget to 'npm install' when doing so)
- Helper is used to includes references to css and js files needed for project's pages
*/