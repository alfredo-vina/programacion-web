var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user:"trabajo_practico",
    password:"trabajo_practico",
    database: "trabajo_practico" 
});
/*
    host: process.env.MYSQL_HOST, //"localhost",
    user: process.env.MYSQL_USER, //"trabajo_practico",
    password: process.env.MYSQL_PASSWORD, //"trabajo_practico",
    database: process.env.MYSQL_DB_NAME //"trabajo_practico" 
*/

pool.query = util.promisify(pool.query);

module.exports = pool;