const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.sendFile('index.html',{root:'public'})
})

app.use(express.static('public'));

app.listen(9000, function(){
    console.log("App running on port " + this.address().port);
})