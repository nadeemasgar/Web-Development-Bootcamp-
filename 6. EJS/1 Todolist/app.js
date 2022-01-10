// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // To tell browser that we are using ejs



app.get("/", (req, res) => {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    day = week[currentDay];
    console.log(currentDay, week, day);
    res.render("list", {kindOfDay : day});
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});


