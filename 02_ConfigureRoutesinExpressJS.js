var express = require("express");
var app = express();

// define routes

// get() - which used to load the page requests into web browser
app.get("/", function(req, res) {
    res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.get("/about-us", function(req, res) {
    res.send("<html><body><h1>About Us</h1></body></html>");
});

// post() - which used to post or submit the data
app.post("/submit-data", function(req, res) {
    res.send("Post Request");
});


// put() - which used to update the data
app.put("/update-data", function(req, res) {
    res.send("PUT Request");
});


// delete() - which used to delete the data
app.delete("/delete-data", function(req, res) {
    res.send("DELETE Request");
});

var server = app.listen(5000, function() {
    console.log("NodeJS server is running!");
});