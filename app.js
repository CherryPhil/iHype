var express = require("express")
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get("/login", (req, res) => {
    console.log(req);
    res.render("login", {
        title: "Login"
    })
})

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    })
})

app.get("/terms&conditions", (req, res) => {
    res.render("terms&conditions", {
        title: "Terms & Conditions"
    })
})

app.get("/privacy", (req, res) => {
    res.render("privacy", {
        title: "Privacy"
    })
})

app.listen(3000)