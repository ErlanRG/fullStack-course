//Required to use the express modules
const express = require("express");

//Required to use the HTTPS protocol
const https = require("https");

//Required to use body parser
const bodyParser = require("body-parser");

//Used to call the express elements
const app = express();
const port = 3000;

//Making the app to use the body parser
app.use(bodyParser.urlencoded({extended: true}));

//app.get function is used to set everything we will be returning to the client
//on the first request (depending on the route the client request)
app.get("/", (req, res) =>{

    //Sending the html file to the client
    res.sendFile(__dirname + "/index.html")
});

//Making a post request
app.post("/", (req, res) => {
    //Breaking down the original URL 
    //Original URL: https://api.openweathermap.org/data/2.5/weather?id=3624060&appid=30061eb357224e789e7c2e5033320524
    //
    //The req.body.cityName was obtained via body parser
    var query = req.body.cityName;
    const apiKey = "30061eb357224e789e7c2e5033320524";
    const units = "metric";

    //URL is a weather API for this app
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    //This function create HTTPS "transactions" between the client and the 
    //server
    https.get(url, (response) => {

        //HTTPS status codes shows the status of the response
        console.log("Status code: " + response.statusCode);

        //response.on is the way of the server to send back the information
        //wanted to the client
        response.on("data", (data) => {
            //Parsing the data to a JSON format. Initially, the data returned
            //is shown in hex.
            const weatherData = JSON.parse(data);

            //Targeting the variable we want from the API.
            //Temp is given in Kelvin. Need to convert to Celcius
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description; 
           
            //Setting the icon from the API
            var icon = weatherData.weather[0].icon; 
            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            
            //res.write is used to write all the information that is want
            //to be sent. That way, we only use res.send once.
            res.write("<p>The wather is currently " + description + "</p>");
            res.write("<h1>The temperature is: " + temp + " Celcius degrees</h1>");
            res.write("<img src=" + iconURL + ">");

            //This method returns everything to the client
            res.send();
        });
    });
});

//Creating a port to communicate
app.listen(port, () => {
    console.log("Server is running on port 3000")
});
