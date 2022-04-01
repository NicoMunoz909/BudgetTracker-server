const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'alkemy',
  password: 'alkemy',
  database: 'alkemy',
})

