const mysql = require('mysql2/promise');

// Create the connection pool. The pool-specific settings are the defaults
const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'1234',
  database: 'nodejs',
  
});



module.exports=mysqlPool