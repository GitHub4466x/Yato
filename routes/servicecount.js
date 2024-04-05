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
    let query = `SELECT *, COUNT(r.service_id) AS total FROM tbl_servicerequest r LEFT JOIN tbl_service s ON s.service_id = r.service_id GROUP BY r.service_id;` ; 
 
    con.query(query, (err, rows) => { 
        if (err) throw err; 
        res.send(rows); 
        console.log(rows); 
    }); 
}); 
module.exports = router; 