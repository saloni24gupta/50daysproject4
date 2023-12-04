const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("heolo world");
} )
app.post("/students", (req, res) => {
   res.send("hello world")
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})