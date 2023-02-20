const mysql = require("mysql2");

const options = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME
};


const dbConnection = mysql.createConnection(options);


dbConnection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected to sql database")
})

module.exports = dbConnection;