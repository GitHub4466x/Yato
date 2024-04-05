var mysql=require('mysql');
var express = require('express');
var router = express.Router();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_servicehub"
});




router.get('/',(req,res,next)=>{ 
    let strquery = `SELECT * FROM tbl_servicecenter s 
    inner join tbl_district d on d.district_id=s.district_id 
    inner join tbl_location l on l.location_id=s.location_id 
    inner join tbl_company c on c.company_id=s.company_id
    inner join tbl_login lo on lo.login_id=s.login_id 
    where lo.status='notconfirm' and lo.role='center'`; 
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });
 }); 
 module.exports=router;