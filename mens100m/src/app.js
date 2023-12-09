const express = require("express");
const router = require("../src/routers/men")
require("../src/db/conn")
const MensRanking = require("../src/models/mens")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
// we will handle post request

app.use(router);
app.listen(PORT,() => {
    console.log(`connection is live at port no ${PORT} `)
})