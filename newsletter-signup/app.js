const express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    https = require("https"),
    port = 3000,
    apiKey = ce9dabb15c7dafee43f78979bb358a4c; //Mailchimp
    listID = "32bb52e88f"; //Add quotes around a word: ciw "" <C-c>p 
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

//icons and images are static elements inside the html
//to reflect the files in js, should use app.use
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    var firstName = req.body.fName,
        lastName = req.body.lName,
        email = req.body.email,

        data = {
            members: [
                {
                    email_address: email,
                    status: "subscribe",
                    merge_fields:{
                        FNAME: firstName,
                        LNAME: lastName
                    }
                }
            ]
        };

    var jsonData = JSON.stringify(data);
    https.request(url, options, (response) =>{
        
    })
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
