// server.js

// Here we import everything that we did in the routes, and tie them neatly under one function.

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();

// We will be running on localhost:8000
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  // res.end() ends our request
  res.send("<p>We are live</p>");
  res.end();
});

MongoClient.connect(
  db.url,
  (err, database) => {
    if (err) return console.log(err);
    require("./app/routes")(app, database);
    app.listen(port, () => {
      console.log("Hello There, We are live at port:" + " " + port);
    });
  }
);
