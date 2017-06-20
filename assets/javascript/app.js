// Initialize Firebase
//*******************************************************************
var config = {
    apiKey: "AIzaSyA-UTuYnXUX7QCfBQWJpuo0gabZIC7Fyp8",
    authDomain: "chillcast-c8bde.firebaseapp.com",
    databaseURL: "https://chillcast-c8bde.firebaseio.com",
    projectId: "chillcast-c8bde",
    storageBucket: "chillcast-c8bde.appspot.com",
    messagingSenderId: "655987963065"
};
firebase.initializeApp(config);

var database = firebase.database();



// Initial Variables
//*******************************************************************
var minTemp = 0;
var maxTemp = 0;
var weatherIcon = "";
var instagramQueryUrl = "";
var weatherQueryUrl = "";
var APIKEY = "a219531e0ef0e795fcea4e7cc6b2e402";
var searchLocation = "";
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var weatherApiKey = "&APPID=166a433c57516f51dfab1f7edaed8413";


var emailInfo = "";

var weatherForecastTime = "";
var weatherDescription = "";
var weatherHumidity = "";
var weatherTemperature = "";
var weatherWindSpeed = "";
var weatherIcon = "";





//Html clicks
//**********************t***********************************************

$("#emailSubmit").on("click", function(){

  emailInfo = $("#emailInput").val().trim();

  database.ref().set({
    email: emailInfo,
    weatherForecastTime: weatherForecastTime,
    weatherDescription: weatherDescription,
    weatherHumidity: weatherHumidity,
    weatherTemperature: weatherTemperature,
    weatherWindSpeed: weatherWindSpeed,
    weatherIcon: weatherIcon
  })

});


$("#submitButton").on("click", function() {

    searchLocation = $("#initialInput").val().trim();
    queryUrl = queryUrl + searchLocation + weatherApiKey;


    // GET Call to Flickr **********************************************
    $.get({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "tags": searchLocation, "format": "json" }
    });


    // Get OpenweatherAPI ajax call *************************************
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        minTemp = ((response.list[12].main.temp_min - 273.15) * 9 / 5) + 32;
        


        //replace Degrees Farenheit with icon later?
        minTemp = "Min Temperature: " + Math.floor(minTemp) + " Degrees Farenheit";
       

        weatherIcon = response.list[0].weather[0].icon;


        $("#displayedWeather").append("<p> Time: " + response.list[12].dt_txt + "</p>")

        .append("<p> Decription: " + response.list[12].weather[0].description + "</p>")

        .append("<p>" + "Humidity: " + response.list[12].main.humidity + " % </p>")

        .append("<p>" + minTemp + "</p>")

        .append("<p> Wind Speed " + response.list[12].wind.speed + "MPH </p>")

        .append("<img src = 'http://openweathermap.org/img/w/" + weatherIcon + ".png' style = 'width:100px'>")

        //    testing   
        weatherForecastTime =  response.list[12].dt_txt;
        weatherDescription = response.list[12].weather[0].description;
        weatherHumidity = response.list[12].main.humidity;
        weatherTemperature = minTemp;
        weatherWindSpeed = response.list[12].wind.speed;
        weatherIcon = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';

        console.log(weatherIcon);




        console.log(response.list[0]);


    });

    $("#firstScreenDisplayed").hide();
    $("#secondScreenDisplayed").show();
});






// Prevent Numbers from being entered into the field. 

var number = document.getElementById('initialInput');

number.onkeydown = function(e) {

    if (e.keyCode > 47 && e.keyCode < 58) {
        return false;
    } else if (e.keyCode > 95 && e.keyCode < 106) {
        return false;
    }
}









function jsonFlickrFeed(json) {
    console.log(json);



    $.each(json.items, function(i, item) {
        $("<img />").attr("src", item.media.m).appendTo("#displayedImages");
    });
};
