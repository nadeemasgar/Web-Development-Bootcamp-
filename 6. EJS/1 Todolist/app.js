// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello");  // response from server to browser ... help to perform logic and send back to browser
  //   res.send("<h1> Hello.. today is Monday </h1>"); // sending HTML to browser .. send is is used for final sending instruction

  /*   res.write("<h1> Hello.. today is Monday </h1>"); // res.write() to send multiple pieces of data
       res.write("<h2> This is Nadeem </h2>");
       res.send();
  */

       res.sendFile(__dirname + "/index.html");  // To send entire html file to browser
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
