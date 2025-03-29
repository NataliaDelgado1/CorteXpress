const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "corteXpres"
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
        return;
    }
    console.log("Conectado a MariaDB");
});

module.exports = connection;
