var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_servicehub"
});

router.post('/',(req,res,next)=>{ 
    let login_id=req.body.login_id;
    let cat_id=req.body.cat_id;

    if(cat_id=='0')
    {
    let strquery = `SELECT * FROM tbl_centerservice c inner join tbl_service s on c.service_id=s.service_id inner join tbl_category ca on ca.cat_id=s.cat_id where c.center_id='${login_id}'`; 
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });
    }
    else{
        let strquery = `SELECT * FROM tbl_centerservice c inner join tbl_service s on c.service_id=s.service_id
         inner join tbl_category ca on ca.cat_id=s.cat_id where c.center_id='${login_id}' and ca.cat_id='${cat_id}'`; 
  console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    console.log(result);
     res.send(result) 
    });

    }
 }); 
 module.exports=router;