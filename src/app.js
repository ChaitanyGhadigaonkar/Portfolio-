const express = require("express");
const path =require("path");
const hbs=require("hbs");
const app =express();
const port =8000;
const staticPath=path.join(__dirname,"../public/css");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../views/partials");


// database work
require('./db/conn');
const PortFolioClient= require("./models/register");
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(express.static("public"));
app.set('veiw engine','hbs');
// app.set("views",templatePath);

hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/about",(req,res)=>{
    res.render("about.hbs");
})

app.get("/more-projects",(req,res)=>{
    res.render("projects.hbs");
})
app.post("/send",async(req,res)=>{
console.log(req.body.email);
    try{
        const Client = new PortFolioClient({
            name:req.body.name,
            eamilAddress:req.body.email,
            message:req.body.message
        });
        const result = await Client.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
    res.send("suceess");
})


app.get("*",(req,res)=>{
    res.status(404).send("Page not found");
})

app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})