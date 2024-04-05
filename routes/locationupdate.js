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
let location_id = req.body.location_id;
let district_id = req.body.district_id;
let location_name = req.body.location_name;

let Query=`select * from tbl_location where district_id='${district_id}' and location_name='${location_name}'`;
    con.query(Query,(err,row)=>{
        if(row.length >0)
        {
            res.send({message:"exists"});
            return
        }
        else
        {
            let strquery = `UPDATE tbl_location SET  location_name='${location_name}',district_id='${district_id}'  where location_id='${location_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
        }
    })



})
module.exports = router;
