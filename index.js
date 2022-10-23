const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejs = require("ejs");
const Post = require("./modals/Post");
const pageContralers = require("./controllars/pageControlars");

const postContralers = require("./controllars/postControllars");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db");

// templete engine
app.set("view engine", "ejs");
// views ile temp ismi değişir

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// routers
app.get("/", pageContralers.indexPage);
app.get("/about", pageContralers.aboutPage);
app.get("/add_post", pageContralers.addPostPage);


app.get("/post/:id", postContralers.getPostAll);
app.get("/post/edit/:id", pageContralers.editPage);
app.post("/postAdd", postContralers.addPost);
app.put("/post/:id", postContralers.updatePost);
app.delete("/post/:id", postContralers.deletePost);

app.listen(3000, () => {
  console.log("sunucu başladı");
});
