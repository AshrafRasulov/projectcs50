var express = require('express'),
         db = require('mongojs'),
 bodyParser = require('body-parser'),
        app = express(),
       PORT = 3000;

// there is we will use static space

app.use(express.static(__dirname + '/public')).listen(PORT);
console.log("Go to Server: http://127.0.0.1:"+PORT);
