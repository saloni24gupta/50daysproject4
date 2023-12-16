const mongoose = require("mongoose");
const userData = new mongoose.Schema({
   email: {
        type: String,
        required:true,
        unique: true
    },

    password: {
type: String,
required: true
    }
})

const Register = new mongoose.model("Register", userData)

module.exports =  Register