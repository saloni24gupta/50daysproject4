const express = require("express");
const path = require('path');
const app = express()
const port = process.env.PORT ||  8000;
const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))
app.get("/", (req, res) => {
    res.send("this is my home page");
})
app.get("/about", (req, res) => {
    res.send("this is my about page");
})
app.get("/contact", (req, res) => {
    res.send("this is my contact page");
})

app.get("/weather", (req, res) => {
    res.send("this is my weather page");
})
app.get("*" , (req, res) => {
    res.send("404 error page")
})
app.listen(port, (req, res) => {
console.log(`listening to the port ${port }`);
})