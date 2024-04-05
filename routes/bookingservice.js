var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"db_servicehub"
})
router.post('/', (req, res, next) => {
let center_id= req.body.center_id;
let login_id=req.body.login_id;
let service_id=req.body.service_id;
let service_date=req.body.service_date;
let amount=req.body.amount;
console.log(service_date)
    var request_date = new Date();


    let query2 =`INSERT INTO tbl_servicerequest(login_id,service_id,center_id,request_date,service_date,service_amount,status) VALUES(?,?,?,?,?,?,?)`;
    con.query(query2, [login_id,service_id,center_id,request_date,service_date,amount,'Pending']) 
// let query = `INSERT INTO tbl_servicecenter (center_name,email,contact_no,photo,) VALUES(?);`; 
//     con.query(query, [district_name]) 
console.log(query2);


res.send({ message: 'Success' }) 
     
// con.query(query, (err, rows) => {
// if (err) throw err;
// res.send(rows);
// });
    })

/* GET users listing. */
module.exports = router;
