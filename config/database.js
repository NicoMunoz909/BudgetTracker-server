const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b80da5b4aa2aec',
  password: '4118861c',
  database: 'heroku_b31a2aae1c2207a',
})

