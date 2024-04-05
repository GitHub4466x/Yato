var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection
({
host: "localhost",
user: "root",
password: "",
database: "db_servicehub"
});
router.post('/', (req, res, next) => {
let remark = req.body.remark;
let request_id = req.body.request_id;
let service_charge = req.body.service_AdditionalCharge;
let TotalAmount =req.body.TotalAmount;

console.log("service_charge",service_charge)


let strquery = `UPDATE tbl_servicerequest SET  status='Requested',remark='${remark}',service_charge='${service_charge}',total_amount='${TotalAmount}' where request_id='${request_id}'`;
//    console.log(strquery)
   con.query(strquery, (err, rows) => {
   if (err) throw err;
   res.send({message:'Success'})
   });
   



})
module.exports = router;



// let query = `SELECT * FROM tbl_servicerequest where request_id='${request_id}'`; 
// // console.log(query)
// con.query(query,(err,result)=>{ 
//   if(err) {console.log(err);} 
// //   console.log(result);
//    res.send(result) 
// let service_amount=result[0].service_amount;

// console.log("service_amount",service_amount)

// let amount=+service_charge+service_amount;

// console.log("total",amount)

   


  

