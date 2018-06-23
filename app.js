var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var sugi = require("./server/controllers/sugiControl");

app.get("/login", sugi.openLogin);
app.get("/", sugi.openHome);
app.get("/terms&conditions", sugi.openTermsConditions);
app.get("/privacy", sugi.openPrivacy);

app.post("/login", sugi.login);
app.post("/register", sugi.register);

app.listen(3000);