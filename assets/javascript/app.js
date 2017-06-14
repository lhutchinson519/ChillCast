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

var instagramQueryUrl = "";
var weatherQueryUrl = "";
var APIKEY = "a219531e0ef0e795fcea4e7cc6b2e402";
var searchLocation = "";
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var weatherApiKey = "&APPID=166a433c57516f51dfab1f7edaed8413";













// Ajax call to Weather API 
//*********************************************************************


//Html clicks
//*********************************************************************

$("#submitButton").on("click",function(){
	console.log("button clicked");
	searchLocation = $("#initialInput").val().trim();

	console.log(searchLocation);
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
    }).done(function(response){
      console.log(response);

     
    });


		

});









function jsonFlickrFeed(json) {
		  console.log(json);

		  $.each(json.items, function(i, item) {
		    $("<img />").attr("src", item.media.m).appendTo("#images");
		  });
		}; 







