const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testDB',
    password: 'kashif'
});

module.exports = pool.promise();