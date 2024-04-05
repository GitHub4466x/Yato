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
let district_id = req.body.district_id;
let districtname = req.body.districtname;

let Query=`select * from tbl_district where district_name='${districtname}'`;
    con.query(Query,(err,row)=>{
        if(row.length > 0)
        {
            res.send({message:'exists'})
        }
        else{
            let strquery = `UPDATE tbl_district SET  district_name='${districtname}' where district_id='${district_id}'`;
            console.log(strquery)
            con.query(strquery, (err, rows) => {
            if (err) throw err;
            res.send({message:'Success'})
            });

        }
    })

})
module.exports = router;
