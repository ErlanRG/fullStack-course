const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var today = new Date(),
        currentDay = today.getDay(),
        day = "";

    //if (currentDay === 6 || currentDay === 0){
    //    day = "Weekend";
    //} else {
    //    day = "Weekday";
    //}

    switch(currentDay){
        case 0:
            day = "Monday";
        case 1:
            day = "Tuesday";
        case 2:
            day = "Wednesday";
        case 3:
            day = "Thursday";
        case 4:
            day = "Friday";
        case 5:
            day = "Saturday";
        case 6:
            day = "Sunday";
        default:
            break;
    }
   
    res.render("list",{kindOfDay: day});
});

app.listen(3000, () => console.log("Server running on port 3000"));
