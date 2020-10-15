const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send("<h1>Hello world<h1>")
});

app.get("/contact", (req, res)=>{
    res.send("Contact page")
});

app.get("/about", (req, res)=>{
    res.send("My name is Erlan and this is a test")
});

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
});
