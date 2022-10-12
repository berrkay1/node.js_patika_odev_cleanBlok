const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const ejs = require("ejs");
const Post = require("./modals/Post");

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// templete engine
app.set("view engine","ejs");
// views ile temp ismi değişir


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",async (req,res)=> {
    const posts = await Post.find({});
    res.render("index",{
        posts
    });
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


app.post("/postAdd",async (req,res)=> {
    await Post.create(req.body)
    res.redirect("/");
})

app.listen(3000,()=> {
    console.log("sunucu başladı");
})
