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
    let query = `SELECT *, COUNT(r.request_id) AS total_bookings FROM tbl_servicerequest r LEFT JOIN tbl_servicecenter c ON c.login_id = r.center_id GROUP BY r.center_id;` ; 
 
    con.query(query, (err, rows) => { 
        if (err) throw err; 
        res.send(rows); 
        console.log(rows); 
    }); 
}); 
module.exports = router; 