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
    
  
   let strquery=` SELECT * FROM tbl_servicerequest r inner join tbl_customer c on c.login_id=r.login_id inner join tbl_servicecenter s on r.center_id=s.login_id  inner join tbl_service sr on r.service_id=sr.service_id inner join tbl_vehicle v on c.login_id=v.login_id where r.login_id='${login_id}' order by r.request_id ASC`


  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });
 }); 
 module.exports=router;