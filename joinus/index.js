const express = require("express");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "join_us",
    password:"azertyuiop147*"
});

app.get("/", function (req, res)
    {
        const q = "SELECT COUNT(*) as count from users";
    connection.query(q, function (err, results) {
        if (err) throw err;
            const count = results[0].count;
        //res.send("We have " + count + " users in our database");
        res.render("home",{data:count});
    });
});

app.post("/register", function (req, res) {
    const person = {
        email: req.body.email
    };
     connection.query("INSERT INTO users SET ?", person, function (err, results) {
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/joke", function (req, res) {
    const joke = "What  do u call a dog that does magic trikcs?  A labracoodle";
    res.send(joke);
})
app.get("/random_num", function (req, res) {
    const num=Math.floor(Math.random() * 10)+1;
    res.send("Luck number is "+ num);
})
app.listen(8080, function () {
    console.log("Server running on 8080");
});