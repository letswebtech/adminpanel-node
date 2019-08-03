let  PORT = process.env.PORT || 3000 ;

const mysql = require('mysql2');

const localDB = {
    host: 'localhost',
    user: 'root',
    database: 'testDB',
    password: 'kashif'
};

const liveDb = {
    host: 'remotemysql.com',
    user: 'xb4JJoNeNb',
    database: 'xb4JJoNeNb',
    password: 'mWuocDKlu6'
};


const pool = mysql.createPool(PORT == 3000 ? localDB : liveDb);

module.exports = pool.promise();