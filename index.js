// Reference:
// - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// - Project 1

"use strict";

var express = require('express');
var app = express();

// inspiration for the following from:
// http://stackoverflow.com/questions/12038128/nodejs-using-redis-connect-redis-with-express
// and
// http://www.tutorialindustry.com/nodejs-redis-tutorial-for-beginners
var http = require('http');
var redis = require('redis');
var client = redis.createClient();

var port = process.env.PORT || 3000;

// inspiration for the following from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.engine('html', require('jade').renderFile);

app.listen(port);
console.log('Magic happening on port ' + port);

app.get("/", function (req, res) {
  return res.render("index.jade");
});
