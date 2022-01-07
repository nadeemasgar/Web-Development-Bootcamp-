const express = require("express");
const https = require("https"); // https module to make get request to external server
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "c38d92fa28312e344e248cae42813ce9";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //   console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      weatherDescription = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(
        `<h1>The temperature in ${query} is ${temp} degrees Celsius</h1>`
      );
      res.write(`<h2> The weather is currently ${weatherDescription} </h2>`);
      res.write(`<img src = "${imageURL}">`);

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running");
});
