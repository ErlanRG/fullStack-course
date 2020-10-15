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
    res.sendFile(__dirname + "/index.html")
});

//Function to post a message on route selected
app.post("/index.html", (req, res) => {
    var num1 = Number(req.body.num1),
        num2 = Number(req.body.num2),
        sum = num1 + num2;

    console.log(sum);
    res.send("Result of the sum: " + sum)
});

//Function to confirm server is listening on a port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
