require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
// the fucntion middleware has to be in first position because 
// if not! the request arent going to pass through it 
app.use("/",function(req,res,next){
    console.log(req.method," - ",req.path," - ",req.ip);
    next();
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
