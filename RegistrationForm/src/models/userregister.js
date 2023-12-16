const mongoose = require("mongoose");
const userData = new mongoose.Schema({
   email: {
        type: String,
        required:true,
       
    },

    password: {
type: String,
required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
})

const Register = new mongoose.model("Register", userData)

module.exports =  Register