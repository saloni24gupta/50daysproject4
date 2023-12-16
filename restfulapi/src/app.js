const express = require("express");
const Student = require("../src/models/students")
require("./db/conn");
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 8000;

app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("heolo world from this side");
// } )
app.post("/students", (req, res) => {
    console.log(res.body);
    const user = new Student(req.body);
user.save().then(() => {
    res.send(user);
}).cathc((e) => {
    res.send(e);
})

   res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`connection is setup at ${PORT}`);
})