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
    let query = `SELECT  COUNT(l.role) AS total
    FROM tbl_servicecenter s
    LEFT JOIN tbl_login l ON s.login_id = l.login_id
    WHERE l.status ='Confirmed' AND l.role ='center'
    GROUP BY l.role;` ; 
 
    con.query(query, (err, rows) => { 
        if (err) throw err; 
        res.send(rows); 
        console.log(rows); 
    }); 
}); 
module.exports = router; 