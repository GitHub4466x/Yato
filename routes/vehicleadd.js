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
    let vehicle_name = req.body.vehicle_name;
    let vehicle_no = req.body.vehicle_no;   
    let company_id = req.body.company_id;
    let fuel_id = req.body.fuel_id;
    let vehicle_img = req.body.vehicle_img;  
    let login_id = req.body.login_id; 
     let strquery = `INSERT INTO tbl_vehicle(vehicle_name,company_id,fuel_id,vehicle_no,login_id,vehicle_img) VALUES(?,?,?,?,?,?);`; 
     con.query(strquery, [vehicle_name,company_id,fuel_id,vehicle_no,login_id,vehicle_img]) 
    res.send({ message: 'Success' }) 
     
      console.log(strquery);
     }); 
    module.exports = router; 