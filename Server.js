var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/faq',function(req,res){
  res.sendFile('faq.html', {"root": __dirname + '/views'});
});

app.listen(5000);

console.log("Running at Port 5000");
