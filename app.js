const express = require('express');
const bodyParser = require("body-parser");

const app = express();
let intems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {

    let today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString("en-US", options);
    res.render("index", { KindOfDay: day, newListItems: intems });
});

app.post('/', (req, res) => {
    let intem = req.body.newItem;
    intems.push(intem);
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});