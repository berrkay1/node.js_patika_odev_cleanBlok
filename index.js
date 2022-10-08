const express = require("express");

const app = express();


const photo = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/",(req,res)=> {
   res.send(photo);
})


app.listen(3000,()=> {
    console.log("sunucu başladı");
})
