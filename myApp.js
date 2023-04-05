let express = require('express');
let app = express();
console.log("Hello World");

app.get("/",(req,res)=>{
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});
let absolutePath = __dirname + "/public";
app.use("/public",express.static(absolutePath));

app.get("/json",(req,res)=>{
    res.json({"message": "Hello json"});
});



























 module.exports = app;
