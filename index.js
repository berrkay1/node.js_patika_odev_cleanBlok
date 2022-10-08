const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

// templete engine
app.set("view engine","ejs");
// views ile temp ismi değişir


//middleware
app.use(express.static('public'));

app.get("/",(req,res)=> {
    res.render("index");
});

app.get("/post",(req,res)=> {
    res.render("post");
})

app.get("/about",(req,res)=> {
    res.render("about");
})

app.get("/add_post",(req,res)=> {
    res.render("add_post");
})


app.listen(3000,()=> {
    console.log("sunucu başladı");
})
