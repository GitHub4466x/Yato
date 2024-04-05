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
    let service_name = req.body.servicename;  
    let cat_id = req.body.cat_id; 
    let service_img = req.body.service_img;
    let Query=`select * from tbl_service where cat_id='${cat_id}' and service_name='${service_name}' `;
    con.query(Query,(err,rows)=>{
        if(rows.length > 0)
        {
            res.send({message:'exists'})
            return
        }
        else{
            let strquery = `INSERT INTO tbl_service (service_name,cat_id,service_img) VALUES(?,?,?);`; 
            con.query(strquery, [service_name,cat_id,service_img]) 
           res.send({ message: 'Success' }) 
        }
    })
    
     
     // console.log("1 record inserted");
     }); 
    module.exports = router; 