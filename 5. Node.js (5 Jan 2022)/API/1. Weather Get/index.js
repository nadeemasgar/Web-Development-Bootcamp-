const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c38d92fa28312e344e248cae42813ce9&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //   console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      weatherDescription = weatherData.weather[0].description;
      console.log();
      //   var html = "<h1>The temperature in London is " + temp + " degrees Celsius</h1>";
      //   html += `<h2> The weather is currently ${weatherDescription} </h2>`;

      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write("<h1>The temperature in London is " + temp + " degrees Celsius</h1>");
      res.write(`<h2> The weather is currently ${weatherDescription} </h2>`);
      res.write(`<img src = "${imageURL}">`);

      res.send();   // res.send("Done") ==> wrong
    });
  });
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
