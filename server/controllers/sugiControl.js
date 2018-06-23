var UserModel = require('../models/usersModel');
var myDatabase = require('./sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;

exports.openLogin = function(req, res) {
    res.render("login", {
        title: "Login",
        error: ""
    })
}

exports.login = function(req, res) {
    var Email = req.body.logEmail;
    var Pass = req.body.logPass;
    UserModel.findAll({
        where: {
            email: Email
        }
    }).then(function(person) {
        if(person[0].password == Pass){
            res.redirect("/");
        } else {
            res.render("login", {
                title: "Login",
                error: "Wrong password!"
            })
        }
    }).catch(function() {
        res.render("login", {
            title: "Login",
            error: "No such email registered!"
        })
    })
}

exports.register = function(req, res) {
    var newUser = {
        email: req.body.regEmail,
        password: req.body.regConPass
    }
    UserModel.create(newUser);
    res.redirect("/");
}

exports.openHome = function(req, res) {
    res.render("home", {
        title: "Home"
    })
}

exports.openTermsConditions = function(req, res) {
    res.render("terms&conditions", {
        title: "Terms & Conditions"
    })
}

exports.openPrivacy = function(req, res) {
    res.render("privacy", {
        title: "Privacy"
    })
}