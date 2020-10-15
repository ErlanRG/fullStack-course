const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//To get the information posted by the client, urlencoded needs to be used
//Extended: true allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

//Function to receive the information passed by the client
app.get('/', (req, res) => {
    //__dirname will give the file path no matter where the files are hosted
    res.sendFile(__dirname + "/bmiCalculator.html")
});

//Function to post a message on route selected
app.post("/bmiCalculator.html", (req, res) => {
    var weight = parseFloat(req.body.weight),
        height = parseFloat(req.body.height),
        bmi = weight / (Math.pow(height, 2)); 

    console.log(bmi);
    res.send("Your BMI is: " + bmi)
});

//Function to confirm server is listening on a port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
