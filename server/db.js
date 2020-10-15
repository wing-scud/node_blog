const mysql = require('mysql');
const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testblog',
    port: "3306"
}
const pool = mysql.createPool({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    port: mysqlConfig.port,
    multipleStatements: true,//多语句查询
})
function setValue(value) {
    pool.getConnection((error, connection) => {
        var sql = 'INSERT INTO table1(code) VALUES (' + value + ')'
        connection.query(sql, (error, result) => {
            console.log("11111", result);
            connection.release();
        })
    })
}
function getValue() {
    var promise = new Promise((resolve) => {
        pool.getConnection((error, connection) => {
            var sql = 'SELECT * FROM table1'
            connection.query(sql, (error, result) => {
                console.log("2222", result);
                connection.release();
                resolve(result);
            })
        })
    })
    return promise;
}
module.exports = { setValue, getValue };
