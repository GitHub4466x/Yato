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
let name = req.body.name;
let email=req.body.email;
let contact_no=req.body.contact_no;
let district_id=req.body.district_id;
let location_id=req.body.location_id;
let username=req.body.username;
let password=req.body.password;
let Query=`select * from tbl_login where username='${username}'`;
con.query(Query,(err,row)=>
{
  if(err)throw err;
  else if(row.length>0)
  {
    res.send({message:"exists"})
    return;
  }
  else
  {

    let query1 = `INSERT INTO tbl_login (username,password,role,status) VALUES(?,?,?,?);`; 
    con.query(query1, [username,password,'customer','Confirmed'],(err,result)=>{

        if(err)throw err

    let login_id = result.insertId;
    console.log(login_id);
    var reg_date = new Date();


    let query2 =`INSERT INTO tbl_customer(name,email,contact_no,district_id,location_id,reg_date,login_id) VALUES(?,?,?,?,?,?,?)`;
    con.query(query2, [name,email,contact_no,district_id,location_id,reg_date,login_id]) 
// let query = `INSERT INTO tbl_servicecenter (center_name,email,contact_no,photo,) VALUES(?);`; 
//     con.query(query, [district_name]) 
console.log(query2);
console.log(query1);





res.send({ message: 'Success' }) 


const mailOptions = { 
    from: `"Service Hub"`, 
    to: `${email}`, 
    subject: "Welcome to Service Hub", 
    html: `Dear Customer,
Weclome to service Hub ` 
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

  }
})


})
/* GET users listing. */
module.exports = router;
