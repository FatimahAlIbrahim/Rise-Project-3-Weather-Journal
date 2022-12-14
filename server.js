// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.listen(port, () => {
    console.log("Server is running");
    console.log(`Running on localhost: ${port}`);
});

// Get routes
app.get('/getWeatherData', (req, res)=>{
    res.send(projectData);
});

// Post routes
app.post('/addWeatherData', (req, res)=>{
    console.log(req.body);
    console.log("add weather data entered")
    const todayWeather = {
        "temperature": req.body.temperature,
        "date": req.body.date,
        "userResponse": req.body.userResponse
    };

    projectData = todayWeather;
});