// jshint esversion:6

// npm init
// npm install express --save
// node server.js
// sudo npm install -g nodemon
// nodemon server.js

// npm install body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    console.log("hi");
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req , res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    console.log(num1, num2);

    var result = num1 +  num2;

    res.send(`The result of the calculation is ${result}`);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var BMI = weight / ( height * height );
    res.send(`Your BMI is ${BMI}`);
});

app.listen(4000, function() {
    console.log("Listening on port 4000");
});