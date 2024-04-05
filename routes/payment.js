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
    let amount = req.body.advanceamount; 
    let request_id=req.body.request_id;
    var date = new Date();
    
   
     let strquery = `INSERT INTO tbl_payment(request_id,amount,status,payment_date) VALUES(?,?,?,?);`; 
     console.log(strquery)
     con.query(strquery, [request_id,amount,'advance',date],(err,result)=>{

        if(err)throw err

    

        let strquery = `UPDATE tbl_servicerequest SET status='Paid' where request_id='${request_id}'`;
        //    console.log(strquery)
           con.query(strquery, (err, rows) => {
           if (err) throw err;
           res.send({message:'Success'})
           });
     })
    
    // res.send({ message: 'Success' }) 
    
     
     // console.log("1 record inserted");
     }); 
    module.exports = router; 