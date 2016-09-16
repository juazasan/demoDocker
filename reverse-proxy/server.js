var express = require('express');
var app = express();
var request = require("request");
var listeningport = process.env.PORT || 8080;

app.get('/proxy/get', function(req, res) {
  var server = req.param('server');
  var port = req.param('port');    
  var url = 'http://' + server + ':' + port


    request(url, function(error, response, body) {
        res.send(body);
    });

  //res.send(response);
});

app.listen(listeningport);
console.log('Server started! At http://localhost:' + listeningport);