var express = require('express');
var router = express.Router();
var mysql=require('mysql');
const nodemailer = require("nodemailer");
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"db_servicehub"
})
router.post('/', (req, res, next) => {
let login_id = req.body.login_id;

let query1 = `UPDATE tbl_login  SET status= ? WHERE login_id='${login_id}'`; 
    con.query(query1, ['Confirmed'],(err,result1)=>{

        if(err)throw err

console.log(query1);


let query2 = `select * from tbl_login l inner join tbl_servicecenter s on l.login_id=s.login_id WHERE l.login_id='${login_id}'`; 
    con.query(query2,(err,result)=>{

        if(err)throw err


res.send({ message: 'Success' }) 
const name=result[0].center_name;
const email=result[0].email;
const mailOptions = { 
    from: `"Service Hub", "amalsunny4466@gmail.com"`, 
    to: `${email}`, 
    subject: " Welcome to Service Hub - Confirm Your Account Registration", 
    html: `Dear ${name},<br>
    Congratulations! You're now part of Service Hub, your go-to platform for seamless car service bookings with the nearest and trusted service centers
    <br>You can log in using the following credentials: 
    <br>Username: ${result[0].username}
    <br>Password: ${result[0].password}` 
  }; 

  const transporter = nodemailer.createTransport({ 
    host: "smtp.gmail.com", 
    port: 587, 
    secure: false, 
    auth: { 
      user: "amalsunny4466@gmail.com", 
      pass: "pywoaofivmsmctft" 
    } 
  }); 

  transporter.sendMail(mailOptions,  (err, info) => { 
    if(err)  
        console.log(err); 
     
    console.log(info); 
  }) 
  console.log(123)
     
// con.query(query, (err, rows) => {
// if (err) throw err;
// res.send(rows);
// });
    })
})
})
/* GET users listing. */
module.exports = router;
