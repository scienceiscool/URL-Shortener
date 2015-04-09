// References:
// - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// - http://www.sitepoint.com/using-redis-node-js/
// - https://github.com/Tutorialindustry/node.js/blob/node.js/Nodejs-redis-tutorial/views/index.jade
// - http://javascriptplayground.com/blog/2012/06/node-express-todo-app-redis/
// - http://www.hacksparrow.com/using-redis-with-node-js.html
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

// inspiration for the following from:
// http://www.sitepoint.com/using-redis-node-js/
client.on('connect', function () {
  console.log('connected');
});

app.listen(port);
console.log('Magic happening on port ' + port);

/*
app.get("/", function (req, res) {
  // reference for the following:
  // http://www.hacksparrow.com/using-redis-with-node-js.html
  client.get("url", function (error, result) {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("URL: " + result);
    }
  });

  client.set("url", req.body.url, function (error, result) {
    if (error) {
      res.send("error: " + error);
    } else {
      res.send("Saved");
    }
  });

  return res.render("index.jade");
});

//client.sadd(["http://localhost:3000/longlonglong", 0, "http://localhost:3000/short"]);

//client.sadd(["http://localhost:3000/short", 0, "http://localhost:3000/longloonglong"]);
*/

app.get("/", function (req, res) {
  //client.srange("http://localhost:3000/longlonglong", 0, 0);
  if (req.submittedurl === "http://localhost:3000/longlonglong") {
    client.set(req.submittedurl, "http://localhost:3000/short", redis.print);
  } else {
    client.set(req.submittedurl, "http://localhost:3000/longlonglong", redis.print);

 //   client.incr(req.submittedurl);
  }
  return res.render("index.jade");
});

app.post("/urlconverted", function (req, res) {
  return res.render("urlconverted.jade");
});

app.get("/longlonglong", function (req, res) {
  return res.send("Hey there, you came here via a long url");
});

app.get("/short", function (req, res) {
  //client.incr("http://localhost:3000/short");
  return res.redirect("http://localhost:3000/longlonglong");
});

/*app.post("/urlconverted", function (req, res) {
  client.get(req.body.key, function (err, reply) {
    res.send("The key value = " + reply.toString());
  });
});
*/
