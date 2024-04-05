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
let center_id = req.body.login_id;
let cservice_id = req.body.cservice_id;
let amount = req.body.amount;
let strquery = `UPDATE tbl_centerservice set amount='${amount}'  where  cservice_id='${cservice_id}' and center_id='${center_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;
