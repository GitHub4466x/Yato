var mysql=require('mysql');
var express = require('express');
var router = express.Router();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_servicehub"
});




router.post('/',(req,res,next)=>{ 
    let login_id=req.body.id;
    let strquery = `SELECT * FROM tbl_servicecenter c inner join tbl_location l on l.location_id=c.location_id inner join tbl_district d on d.district_id=c.district_id inner join tbl_company co on co.company_id=c.company_id  where c.login_id='${login_id}'`; 
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });
 }); 
 module.exports=router;