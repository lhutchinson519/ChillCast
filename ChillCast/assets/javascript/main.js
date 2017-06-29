var firebase = require('firebase');

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

var emailToSend= "";
var weatherForecastTime = "";
var weatherDescription = "";
var weatherHumidity = "";
var weatherTemperature = "";
var weatherWindSpeed = "";
var weatherIcon = "";



database.ref().on("value", function(snapshot){
	emailToSend = snapshot.val().email;

    weatherForecastTime = snapshot.val().weatherForecastTime;
    weatherDescription = snapshot.val().weatherDescription;
    weatherHumidity = snapshot.val().weatherHumidity;
    weatherTemperature = snapshot.val().weatherTemperature;
    weatherWindSpeed = snapshot.val().weatherWindSpeed;
    weatherIcon = snapshot.val().weatherIcon;


	console.log(emailToSend);
    console.log(weatherIcon);

//     for ( var i = 0; i<10; i++){

// }
	sendEmail();

})



function sendEmail(){
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chillcast09@gmail.com',
        pass: 'chillcast1234'
    }
});

var mailOptions = {
    from: 'chillcast09@gmail.com',
    to: emailToSend,
    subject: 'Your Weather Forecast!',
    text: 'That was easy!',
    html: 
    '<p> Forecast Date and Time: '+ weatherForecastTime + '</p>' + '<br>' +
    '<p> Description: ' + weatherDescription + '</p>' + '<br>' +
    '<p> Humidity: ' + weatherHumidity + '</p>' + '<br>' +
    '<p> Temperature: ' + weatherTemperature + '<p>' + '<br>' +
    '<p> Wind Speed: ' + weatherWindSpeed + '<p>' + '<br>'  +
    "<img src ='" + weatherIcon +  "'style= 'width:100px'>"


};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}