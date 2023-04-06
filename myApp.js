require('dotenv').config();
const bodyParser = require('body-parser');

let express = require('express');
let app = express();
console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/now",function(req,res,next){ 
    req.time=new Date().toString();
    next();
},function(req,res){
    res.json({time:req.time});
});
// the fucntion middleware has to be in first position because 
// if not! the request arent going to pass through it 
app.use("/",function(req,res,next){
    console.log(req.method,req.path,"-",req.ip);
    next();
});
//always take the first code ...
app.post("/name",(req,res)=>{
    // let {fisrt : fisrtname , last :lastname} =req.body;
     let string1 =req.body.fisrt+" "+req.body.last;
         res.json({name:string1});
     
 });

// First method destructurando Objects.
app.get("/:word/echo",(req,res)=>{
    let {word} = req.params;
    res.json({echo:word});
});
app.get("/name",(req,res)=>{
    let {first} =req.query;
    let {last} =req.query;
    
    res.json({name: `${first} ${last}`});
});

app.get("/",(req,res)=>{
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});
let absolutePath = __dirname + "/public";
app.use("/public",express.static(absolutePath));

app.get("/json",(req,res)=>{
    let message_style =process.env.MESSAGE_STYLE
    const messaje = message_style==="uppercase"?"HELLO JSON":"Hello json";
    res.json({"message": messaje});
});























 module.exports = app;
