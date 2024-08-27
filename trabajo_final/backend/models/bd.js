var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user:"trabajo_practico",
    password:"trabajo_practico",
    database: "trabajo_practico" 
});

pool.query = util.promisify(pool.query);

module.exports = pool;