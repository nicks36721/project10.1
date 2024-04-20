const express = require("express")
const app = express()

const path = require('path');

const ejs = require('ejs')


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));



// app.set('view engine', 'ejs')
// app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",function(req, res){
    res.render("form")


})


app.post("/create",function(req, res){
    console.log(req.body);

    res.send(req.body)
})

app.listen(3000)