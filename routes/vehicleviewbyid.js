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
    let strquery = `SELECT * FROM tbl_customer c inner join tbl_vehicle v on v.login_id=c.login_id inner 
join tbl_company co on co.company_id=v.company_id inner join tbl_fuel f on f.fuel_id=v.fuel_id where c.login_id='${login_id}'`; 
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    

    console.log(result);
     res.send(result)
    
    });

 }); 
 module.exports=router;