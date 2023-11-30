const { faker } = require("@faker-js/faker");
const  mysql  = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "join_us",
    password:"azertyuiop147*"
});
// Selecting Data

// const q = "SELECT COUNT(*) as total FROM users";
// connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
// });



// inSerting data
// const person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };


// connection.query("INSERT INTO users SET ?",person, function (err, results, fields) {
//     if (err) throw err;
//     console.log(results);
// });



// bulk inserting

const data = [];
for (let i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
        ]);
}

// console.log(data);
const q = "INSERT INTO users(email, created_at) VALUES ?";
connection.query(q, [data], function (err, result) {
    console.log(err);
    console.log(result);
});

connection.end();