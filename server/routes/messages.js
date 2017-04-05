var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
    name: String,
    message: String
});

var Message = mongoose.model('message', MessageSchema, 'messages');


//CREATE
router.post('/', function( req,res ){
  console.log(req.body);
  var message = new Message({
    name : req.body.name,
    message : req.body.message
  });

  message.save(function(err, savedMessage){
    if(err){
      console.log("Mongo Error: ", err);
      res.sentStatus(500);
    }
    
    res.send(savedMessage);
  });
});

//RETRIEVE
router.get('/', function( req,res ){
  res.sendStatus(200);
});

//UPDATE
router.put('/', function( req,res ){
  res.sendStatus(200);
});

//DELETE
router.delete('/', function( req,res ){
  res.sendStatus(200);
});

module.exports = router;
