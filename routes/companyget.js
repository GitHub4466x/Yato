var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_servicehub"
});
/* GET users listing. */
router.post('/', (req, res, next) => {
let company_id = req.body.id;
//console.log(districtid);
let query = `SELECT * FROM tbl_company where company_id='${company_id}'`;
// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;
