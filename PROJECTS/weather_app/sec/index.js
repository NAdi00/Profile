// index.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3010;

// Define a route to get weather data
// app.get('/weather', async (req, res) => {
//   try {
//     // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const apiKey = 'YOUR_API_KEY';
//     const city = req.query.city || 'London'; // Default to London if no city is provided

//     // Make a request to OpenWeatherMap API
//     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

//     // Extract relevant data from the response
//     const weatherData = {
//       temperature: response.data.main.temp,
//       description: response.data.weather[0].description,
//     };

//     res.json(weatherData);
//   } catch (error) {
//     console.error(error);s
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.get("/", (req, res) => {
    res.status(500).json("Welcome to the Weather App! Use /weather?city=Johannesburg");
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});