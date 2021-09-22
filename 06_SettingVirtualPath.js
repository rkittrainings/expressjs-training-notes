var express = require("express");
var app = express();

app.use(express.static('public'));

app.use('/resources', express.static(__dirname + '/images'));

var server = app.listen(5000);