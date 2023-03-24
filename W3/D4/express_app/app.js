const express = require("express");
const app = express();

/*
GET - Read          C - Create
POST - Create       R - Read
PUT - Update        U - Update
DELETE - Delete     D - Delete
*/

// getting the app to respond to a request
app.get("/", function(req, res){
    res.send("Hello World!");
})

// getting the app to listen for requests
app.listen(9000, function(){
    console.log("App running on port " + this.address().port);
})