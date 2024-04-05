var express = require('express'); 
var router = express.Router(); 
var mysql = require('mysql'); 
var con = mysql.createConnection({ 
   host: "localhost", 
   user: "root", 
   password: "", 
   database: "db_servicehub" 
}); 
router.post('/', (req, res, next) => { 
    let login_id=req.body.login_id;
    let center_name=req.body.center_name;
    let photo=req.body.photo;
    let contact_no=req.body.contact_no;
    let email=req.body.email;
    let district_id=req.body.district_id;
    let location_id=req.body.location_id;
    let company_id=req.body.company_id;
    console.log(login_id);
    let query = `UPDATE tbl_servicecenter SET  center_name='${center_name}', email='${email}',contact_no='${contact_no}',district_id='${district_id}', company_id='${company_id}',location_id='${location_id}',photo='${photo}' where login_id='${login_id}'` ; 
    console.log(query);
    con.query(query, (err, rows) => { 
        if (err) throw err; 
        res.send({message:'Success'})
        console.log(rows); 
    }); 
}); 
module.exports = router; 