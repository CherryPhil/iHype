var express = require("express")
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    })
})

app.listen(3000)