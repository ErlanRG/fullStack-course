const express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    https = require("https"),
    port = 3000,
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

//icons and images are static elements inside the html
//to reflect the files in js, should use app.use
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
