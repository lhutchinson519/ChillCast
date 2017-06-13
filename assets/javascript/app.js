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
var flickrApi = "http://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" +  APIKEY  + "$gallery_id=66911286-72157647277042064&format=json&jsoncallback=?";
var searchLocation = "";

var testUrl= "http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&api_key=" + APIKEY;


// Ajax Call to Instagram API
//********************************************************************
$.get(testUrl, function (data){
	console.log(data);
	console.log($.type(data));
	console.log(JSON.parse(data));
});





// Ajax call to Weather API 
//*********************************************************************


//Html clicks
//*********************************************************************

$("#submitButton").on("click",function(){
	console.log("button clicked");
	searchLocation = $("#initialInput").val().trim();

	console.log(searchLocation);

});







