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
    let fuelname = req.body.fuelname; 
    let query=`select * from tbl_fuel where fuel_name='${fuelname}'`;
    con.query(query,(err,row)=>{
        if(row.length >1)
        {
            res.send({message:'exists'})
            return
        }
    else{
     let strquery = `INSERT INTO tbl_fuel(fuel_name) VALUES(?);`; 
     console.log(strquery)
     con.query(strquery, [fuelname]) 
    res.send({ message: 'Success' }) 
     
     // console.log("1 record inserted");
     }
    })
    
    });

    module.exports = router; 