const express = require('express');
const app = express();
const path = require ('path');
const port = 7070;
const ejs = require("ejs");
const mongoose = require('mongoose')

const Test = require('./mongoosetest')

mongoose.connect('mongodb+srv://staghoj:Piktis13!@eksamen.fugkn.mongodb.net/<dbname>?retryWrites=true&w=majority')
{
    useMongoClient: true
}

app.set("view-engine", "ejs");

app.get("/", (req, res) => {

    res.render("frontpage.ejs");

});

app.get("/admin", (req, res) => {

    res.render("admin.ejs");

});

app.use(express.static('Views'));


app.listen(port, function(){
    console.log("server kører");
});
