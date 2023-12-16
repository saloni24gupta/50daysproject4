const express = require("express");
require("./db/conn")
const Register = require("./models/userregister")
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const hbs = require("hbs");
const path = require("path")
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    try {
        const registerEmployee = new Register({
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        })
        const registered = await registerEmployee.save();
        res.status(201).render("index");
        res.send(registered);
        res.send(registerEmployee);
        console.log(registered)
    }
    catch (err) {
        res.status(400).send(err);
    }
})

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)

})

