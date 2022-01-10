// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {  
  res.send("Hello");  // response from server to browser ... help to perform logic and send back to browser
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
