var mysql=require('mysql');
var express = require('express');
var router = express.Router();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_servicehub"
});


router.post('/', (req, res, next)=> {
    let district_name = req.body.districtname; 
    let Query=`select * from tbl_district where district_name='${district_name}'`;
    con.query(Query,(err,row)=>{
        if(row.length > 0)
        {
            res.send({message:'exists'})
        }
        else{
            let strquery = `INSERT INTO tbl_district (district_name) VALUES(?);`; 
     con.query(strquery, [district_name]) 
    res.send({ message: 'Success' }) 
     

        }
    })
     
     // console.log("1 record inserted");
     }); 
    module.exports = router; 