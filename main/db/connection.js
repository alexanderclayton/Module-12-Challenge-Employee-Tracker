const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'employee_tracker'
    },
    console.log('Connected to database')
);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;