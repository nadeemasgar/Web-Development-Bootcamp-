// jshint esversion:6

// npm init
// npm install express --save
// node server.js
// npm install -g nodemon
// nodemon server.js

const express = require("express");

const app = express();

app.get("/", function(request, response) {
    
    // console.log(request);
    response.send("<h1>Hello, world!</h1>");

});

app.get("/contact", function(request, response) {
    
    response.send("nadeemasgar18@gmail.com");
});

app.get("/about", function(request, response) {
    
    response.send("Hi.. Nadeem here");
});

app.listen(3000, function () {
    console.log("Server started on port 3000")
});