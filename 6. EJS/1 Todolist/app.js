// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // To tell browser that we are using ejs

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    var today = new Date();

    var options = {
        weekday : "long",
        day : "numeric", 
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay : day, newListItem : item});
});

/* Using post request, we pass data back from our webpage to our server */
app.post("/", (req, res) => {  /* Handles post requet to the home route */
    var item = req.body.newItem;
    
    res.redirect("/");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
