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
    let service_id=req.body.service_id;
    let district_id=req.body.district_id;
    let location_id=req.body.location_id;
    if(district_id>0 && location_id==0)
    {
    let strquery = `SELECT * FROM tbl_servicecenter s 
    inner join tbl_location l on l.location_id=s.location_id 
    inner join tbl_district d on d.district_id=s.district_id 
    inner join tbl_company c on c.company_id=s.company_id 
    inner join tbl_centerservice cs on cs.center_id=s.login_id
    inner join tbl_service se on se.service_id=cs.service_id 
    where cs.service_id='${service_id}' and s.district_id='${district_id}';`; 
        console.log(strquery)
        con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
        console.log(result);
        res.send(result) 
    });
    }
    else if(district_id>0 && location_id>0)
    {
    let strquery = `SELECT * FROM tbl_servicecenter s 
    inner join tbl_location l on l.location_id=s.location_id 
    inner join tbl_district d on d.district_id=s.district_id 
    inner join tbl_company c on c.company_id=s.company_id 
    inner join tbl_centerservice cs on cs.center_id=s.login_id
    inner join tbl_service se on se.service_id=cs.service_id 
    
    where cs.service_id='${service_id}' and s.district_id='${district_id}' and s.location_id='${location_id}';`; 
        console.log(strquery)
        con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
        console.log(result);
        res.send(result) 
    });
    }
    else 
    {
    let strquery = `SELECT * FROM tbl_servicecenter s 
    inner join tbl_location l on l.location_id=s.location_id 
    inner join tbl_district d on d.district_id=s.district_id 
    inner join tbl_company c on c.company_id=s.company_id 
    inner join tbl_centerservice cs on cs.center_id=s.login_id
    inner join tbl_service se on se.service_id=cs.service_id 
    where cs.service_id='${service_id}';`; 
        console.log(strquery)
        con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
        console.log(result);
        res.send(result) 
    });
    }
    
 }); 
 module.exports=router;