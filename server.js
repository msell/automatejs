var express = require('express');
var automatic = require('./automatic.js')
var app = express();

automatic.start();

app.listen(8080, function(){
    console.log('listening for requests on port 8080');
})