
var express =require("express");
var app =express();
var randoms= require("./words");

app.get("/array", function(req, res){
  res.send(randoms);
});
app.get("/words", function(req, res){
  res.send(randoms[Math.floor(Math.random()*randoms.length )]);
});



var server = app.listen(8080, function(){
  var port=server.address().port;
  console.log("example app listening at  http://localhost:8080", port);
});
