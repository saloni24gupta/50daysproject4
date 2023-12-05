const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", async(req, res) => {
    res.send ("hello from me");
})

app.listen(PORT,() => {
    console.log(`connection is live at port no ${PORT} `)
})