const mysql = require('mysql2');
require('dotenv').config();

const server = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'employee_tracker'
    },
    console.log('Connected to database')
)

module.exports = server;