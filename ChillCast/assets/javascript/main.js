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



database.ref().on("value", function(snapshot){
	emailToSend = snapshot.val().email;
	console.log(emailToSend);
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
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}