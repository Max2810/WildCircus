const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Snoopy69',
  database : 'wildcircus'
});

module.exports = connection;