const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.listen(port, ()=>console.log("Server is Live!"));