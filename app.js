const express = require("express");
const path = require('path')

const app = express();
const expressHbs = require('express-handlebars')

const bodyParser = require("body-parser")
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}))

const adminData = require("./Routes/admin")
const shopRoutes = require("./Routes/shop")
const errorRoutes = require('./Routes/404')


app.engine('hbs',expressHbs({layoutsDir:'views/layout/',defaultLayout:'main-layout', extname:'hbs'}))
app.set('view engine' , 'hbs');
app.set('views','views')


app.use('/admin',adminData.routes)
app.use(shopRoutes)
app.use(errorRoutes)

// app.use((req,res,next)=>{
//     res.status(404).render('404')
// })

app.listen(3000);

