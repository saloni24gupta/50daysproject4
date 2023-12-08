const express = require("express");
require("../src/db/conn")
const MensRanking = require("../src/models/mens")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
// we will handle post request
app.post("/mens", async(req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
console.log(req.body);
const insertMens = await addingMensRecords.save();
res.status(201).send(insertMens)  ;

}catch(e){
      res.status(400).send(e);
    }
    
  
})

app.get("/mens", async(req, res) => {
    try{

        const getMens = await MensRanking.find({});
       res.status(201).send(getMens)  ;

}catch(e){
      res.status(400).send(e);
    }
    
  
})


app.listen(PORT,() => {
    console.log(`connection is live at port no ${PORT} `)
})