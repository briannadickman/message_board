//BASE MODULES
var express = require('express');
var app =  express();
var path = require('path');
var bodyParser = require('body-parser');

//DATABASE MODULES
var db = require('./modules/db.js');

//ROUTE MODULES
var messages = require('./routes/messages.js');
var index = require('./routes/index.js');

//APP CONFIGURATION
app.set("port", (process.env.PORT || 5000));

//MIDDLEWARE CONFIGURATION
app.use(bodyParser.json()); //convert json to an object
app.use(bodyParser.urlencoded({extended: true})); //attach this incoming object to a req.body
app.use(express.static('server/public'));

//ROUTES
app.use('/message', messages);
app.use('/', index); //index at bottom so if it falls through entire stack and middleware,
                    //it catches here for 404 error we wrote in index.js

//LISTEN
app.listen(app.get('port'), function(){
  console.log("listening on port: ", app.get('port'));
});

module.exports = app;
