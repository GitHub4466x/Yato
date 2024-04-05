var express = require('express'); 
var router = express.Router(); 
var mysql=require('mysql'); 
var con=mysql.createConnection({ 
host:"localhost", 
user:"root", 
password:"", 
database:"db_servicehub" 
}); 
/* GET users listing. */ 
router.post('/', function(req, res, next) { 
    let startdate=req.body.startdate; 
    let enddate=req.body.enddate; 
     
    let qry=`SELECT * FROM tbl_servicerequest r inner join tbl_service s on s.service_id=r.service_id inner join tbl_customer c on c.login_id=r.login_id WHERE r.service_date>'${startdate}' and r.service_date<'${enddate}'`; 
    console.log(qry) 
    con.query(qry,(err,row)=>{ 
        if (err) throw err; 
res.send(row); 
    }); 
 
}); 
 
module.exports = router;