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
    let location_name= req.body.locationname;
    let district_id=req.body.district_id;
    let Query=`select * from tbl_location where district_id='${district_id}' and location_name='${location_name}'`;
    con.query(Query,(err,row)=>{
        if((row.length) > 0)
        {
            res.send({message:"exists"});
            return
        }
        else
        {
            let strquery = `INSERT INTO tbl_location (district_id,location_name) VALUES(?,?);`;
            con.query(strquery, [district_id,location_name])
            res.send({ message:'Success' })
        }
    })
     
      
}) 
 module.exports=router;