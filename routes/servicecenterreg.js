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
let center_name = req.body.center_name;
let email=req.body.email;
let contact_no=req.body.contact_no;
let district_id=req.body.district_id;
let location_id=req.body.location_id;
let company_id=req.body.company_id;
let photo=req.body.photo;
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
    con.query(query1, [username,password,'center','notconfirmed'],(err,result)=>{

        if(err)throw err

    let login_id = result.insertId;
    console.log(login_id);
    var reg_date = new Date();


    let query2 =`INSERT INTO tbl_servicecenter(center_name,email,contact_no,district_id,location_id,reg_date,company_id,photo,login_id) VALUES(?,?,?,?,?,?,?,?,?)`;
    con.query(query2, [center_name,email,contact_no,district_id,location_id,reg_date,company_id,photo,login_id]) 
// let query = `INSERT INTO tbl_servicecenter (center_name,email,contact_no,photo,) VALUES(?);`; 
//     con.query(query, [district_name]) 
console.log(query2);
console.log(query1);

res.send({ message: 'Success' }) 
     
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
