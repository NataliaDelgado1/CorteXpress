const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "db",          // Usa el valor del .env o por defecto "db"
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "admin",
    database: process.env.DB_NAME || "corteXpres"
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectando a la base de datos:", err);
        return;
    }
    console.log("Conectado a MariaDB");
});

module.exports = connection;

