//let  PORT = process.env.PORT || 3000 ;
/* MYSQL CONNECTION */
// const mysql = require('mysql2');
// const localDB = {
//     host: 'localhost',
//     user: 'root',
//     database: 'testdb',
//     password: ''
// };
// const liveDb = {
//     host: 'remotemysql.com',
//     user: 'xb4JJoNeNb',
//     database: 'xb4JJoNeNb',
//     password: 'mWuocDKlu6'
// };
// const pool = mysql.createPool(PORT == 3000 ? localDB : liveDb);

// module.exports = pool.promise(); 


/* SEQUELIZER CONNECTION */

const Sequelize =  require('sequelize');

const sequelize = new Sequelize('testdb', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});

module.exports = sequelize;