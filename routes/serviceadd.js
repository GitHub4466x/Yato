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
    let amount = req.body.amount;  
    let service_id = req.body.service_id; 
    let login_id = req.body.login_id;
    let strquery1 = `select * from tbl_centerservice where service_id='${service_id}' and center_id='${login_id}'`; 
    con.query(strquery1,(err,row)=>{
        if(err)throw(err)
        else if(row.length===0)
    {
        let strquery2 = `INSERT INTO tbl_centerservice(service_id,amount,center_id) VALUES(?,?,?);`; 
     con.query(strquery2, [service_id,amount,login_id]) 
    res.send({ message: 'Success' }) 
    }
    else{
        res.send({message:'exist'})
    }
    })

     
     
     // console.log("1 record inserted");
     }); 
    module.exports = router; 