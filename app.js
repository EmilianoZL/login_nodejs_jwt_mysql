const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

const port = process.env.PORT || 4000;


app.set('view engine', 'ejs')


app.use(express.static('public'))


app.use(express.urlencoded({extended:true}))
app.use(express.json())

dotenv.config({path: './env/.env'})


app.use(cookieParser())

app.use('/', require('./routes/router'))


app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});


app.listen(port, ()=>{
    console.log('SERVER UP runnung in http://localhost:4000')
})