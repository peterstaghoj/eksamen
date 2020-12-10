 if(process.env.NODE.ENV !=='productin'){
    require('dotenv').config(   )
}


const express = require ('express')
const app = express ()
const port = 5050
const path = require('path');
const users = require('../model/routes/users')
const deleteuseres = require('../model/routes/deleteusers')
const login = require('../model/routes/login')
const userdata = require('./userdata')
const passport = require('passport')
const flash = require ('express-flash')
const session = require('express-session')
const initialize = require('../model/routes/passport')
const frontpage = require ('../model/routes/frontpage')
const bcrypt = require ('bcrypt')


app.use(express.urlencoded({extended: false}))


app.use(express.static('controller'))



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


app.get('/users/:id', (req, res)=>{
    res.json(userdata.filter(userD=> userD.id === req.params.id));
})

app.use('/frontpage', frontpage)

app.use('/login', login)

app.use('/signup', users)



app.listen(port, function(){
    console.log("server kører");
});