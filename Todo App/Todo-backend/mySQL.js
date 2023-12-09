const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Apurva@123',
    database: 'TodoList',
    port: '3306'
  })
  
  db.connect((err) => {
    if (err) throw err
    else
      console.log('Connected to MySQL Database')
  })

  module.exports = db;