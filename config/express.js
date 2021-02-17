const express = require('express')
const handlebars = require('express-handlebars');
const cookieParesr = require('cookie-parser')
const auth = require('../middlewere/auth')

function setupExpress(app){

    app.engine('hbs', handlebars({
        extname:'hbs'
    }));
    app.set('view engine', 'hbs');
    app.use(express.static(`static`));
    app.use(express.urlencoded({
         extended:true
     }));
    app.use(cookieParesr())
    app.use(auth());
}

module.exports= setupExpress;