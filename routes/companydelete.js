var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_servicehub"
});
router.post('/', (req, res, next) => {
let company_id = req.body.company_id;
let query = `DELETE FROM tbl_company WHERE company_id='${company_id}';`;
con.query(query,(err,rows) => {
if (err) throw err;
res.send({message:'success'}
);
});
});
module.exports = router;