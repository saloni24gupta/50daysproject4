const express = require("express");
require("./db/conn")
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("hello from regstration form")
})

app.listen(PORT, () => {
    console.log(`server is running ${PORT}` )
})