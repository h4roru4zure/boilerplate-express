let express = require('express');
let app = express();
console.log("Hello World");

app.get("/",(req,res)=>{
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});
let absolutePath = __dirname + "/public";
app.use("/public",express.static(absolutePath));




























 module.exports = app;
