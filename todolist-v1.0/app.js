const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const day = date.getDate();
    res.render("list",{listTitle: day, newListItems: items});
});

app.get("/work", (req, res) => {
    res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
});

//POST requests

app.post("/", (req, res) => {
    const item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, () => console.log("Server running on port 3000"));
