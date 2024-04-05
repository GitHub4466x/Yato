var express = require('express'); 
var router = express.Router(); 
var mysql = require('mysql'); 
var con = mysql.createConnection({ 
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "db_servicehub" 
    }); 
/* GET users listing. */ 
router.get('/', (req, res, next) => { 
        let query = `SELECT * FROM tbl_payment p inner join tbl_servicerequest r on r.request_id=p.request_id INNER JOIN tbl_customer c on r.login_id =c.login_id INNER JOIN tbl_service s on s.service_id=r.service_id inner join tbl_servicecenter sc on sc.login_id=r.center_id` ; 
     
        con.query(query, (err, rows) => { 
            if (err) throw err; 
            res.send(rows); 
            console.log(rows); 
        }); 
    }); 
    module.exports = router;