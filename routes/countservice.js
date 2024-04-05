var express = require('express'); 
var router = express.Router(); 
var mysql = require('mysql'); 
var con = mysql.createConnection({ 
   host: "localhost", 
   user: "root", 
   password: "", 
   database: "db_servicehub" 
}); 
router.get('/', (req, res, next) => { 
    let query = `SELECT * FROM tbl_servicerequest where status='Completed'` ; 
 
    con.query(query, (err, rows) => { 
        if (err) throw err; 
        res.send(rows); 
        console.log(rows); 
    }); 
}); 
module.exports = router; 