// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

let workItems = [];

app.set("view engine", "ejs"); // To tell browser that we are using ejs

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {

    let day = date.getDate();

    res.render("list", {listTitle : day, newListItem : items});

});

/* Using post request, we pass data back from our webpage to our server */
app.post("/", (req, res) => {  /* Handles post requet to the home route */
    var item = req.body.newItem;
    
    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {listTitle : "Work List", newListItem : workItems});
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
