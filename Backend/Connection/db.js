const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(process.env.DB_URI);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
