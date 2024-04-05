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
let remark = req.body.remark;
let request_id = req.body.request_id;

let strquery = `UPDATE tbl_servicerequest SET  status='Declained',remark='${remark}' where request_id='${request_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
if (err) throw err;
res.send({message:'Success'})
});
})
module.exports = router;
