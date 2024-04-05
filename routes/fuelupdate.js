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
let fuel_id = req.body.fuel_id;
let fuelname = req.body.fuelname;
let query=`select * from tbl_fuel where fuel_name='${fuelname}'`;
con.query(query,(err,row)=>{
    if(row.length > 0)
    {
        res.send({message:'exists'})
        return
    }
    else{
        let strquery = `UPDATE tbl_fuel SET  fuel_name='${fuelname}' where fuel_id='${fuel_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
    }
})

})
module.exports = router;
