var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "aluno",
    database: "s2a06"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    for (let i = 1; i <= 20; i++)
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record inserted");
    });
});