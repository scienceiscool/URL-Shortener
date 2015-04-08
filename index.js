// Reference:
// - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

"use strict";

var express = require('express');
var app = express();

var redis = require('redis');

var port = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('jade').renderFile);

app.listen(port);
console.log('Magic happening on port ' + port);
