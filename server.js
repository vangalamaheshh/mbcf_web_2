// grab the packages we need
var express = require('express');
var app = express();
var path = require('path');
var port = 8000;

var body_parser = require('body-parser');
var node_mailer = require('nodemailer');

var transporter = node_mailer.createTransport('smtps://mbcf.dfci%40gmail.com:tonTo222@smtp.gmail.com');

app.use( body_parser.json() );
app.use( body_parser.urlencoded( {
    extended: true
} ) );
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));

// routes will go here
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(request, response) {
    
    var contact_name = request.body.contact_name;
    var contact_email = request.body.contact_email;
    var contact_message = request.body.contact_message;
    
    var mailOptions = {
        from: contact_email, // sender address 
        to: 'mbcf.dfci@gmail.com, vangalamaheshh@gmail.com', // list of receivers 
        subject: 'Customer Question from MBCF Website!', // Subject line 
        text: contact_message, // plaintext body 
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            response.status(550);
            response.send("Your message failed to be sent.");
        }
        console.log('Message sent: ' + info.response);
        response.send(info.response);
    });
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
