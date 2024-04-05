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
    let center_id=req.body.center_id;
    let cservice_id=req.body.cservice_id;
    
    let strquery = `select ce.center_name,cs.amount,s.service_name,cs.service_id,ca.cat_name from tbl_servicecenter ce inner join tbl_centerservice cs on cs.center_id =ce.login_id inner join tbl_service s on s.service_id=cs.service_id inner join tbl_category ca on ca.cat_id=s.cat_id where cs.center_id='${center_id}' and cs.cservice_id='${cservice_id}'`;
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });
 }); 
 module.exports=router;