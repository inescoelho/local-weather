$(document).ready(function() {
  getLocation();
});

function getLocation() {
  $.getJSON("http://ip-api.com/json", function(data) {
    //console.log(data);
    $("#location").text(data.city + " (" + data.country + ")");
    
    //get temperature for that position
    getTemperature(data.lat, data.lon);
  });
}

function getTemperature(lat, lon) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=c1039ac32e9d0093da1ca04eb3330708", function(data) {
    //console.log(data);
    
$("#temperature").text(Math.round(data.main.temp)  + "ºC");
     $("#weatherDescription").text(data.weather[0].description);

    chooseWeather(data.weather[0].main); 
    //chooseWeather("Thunderstorm"); 
  });
}

function chooseWeather(weather) {
  
  switch(weather) {
    case "Thunderstorm":
      $('body').css('backgroundImage', 'url(resources/thunderstorm.jpg)');
      $("#weather").append($("<div class='icon thunder-storm'><div class='cloud'></div><div class='lightning'><div class='bolt'></div><div class='bolt'></div>  </div></div>"));
      break;
    case "Drizzle":
      $('body').css('backgroundImage', 'url(resources/drizzle.jpg)');
      $("#weather").append($("<div class='icon sun-shower'><div class='cloud'></div><div class='sun'>  <div class='rays'></div></div><div class='rain'></div></div>"));
      break;
    case "Rain":
      $('body').css('backgroundImage', 'url(resources/rain.jpg)');
      $("#weather").append($("<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>"));
      break;
    case "Snow":
      $('body').css('backgroundImage', 'url(resources/snow.jpg)');
      $("#weather").append($("<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div> </div></div>"));
      break;
    case "Atmosphere":
      $('body').css('backgroundImage', 'url(resources/atmosphere.jpg)');
      $("#weather").append($("<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>"));
      break;
    case "Clear":
      $('body').css('backgroundImage', 'url(resources/sun.jpg)');
      $("#weather").append($("<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>"));
      break;
    case "Clouds":
      $('body').css('backgroundImage', 'url(resources/clouds.jpg)');
      $("#weather").append($("<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>"));
      break;
    default:
      $('body').css('backgroundImage', 'url(resources/extreme.jpg)');
      $("#weather").append($("<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>"));
      break;
                }
}
                  