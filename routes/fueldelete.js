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
let fuel_id = req.body.fuel_id;
let query = `DELETE FROM tbl_fuel WHERE fuel_id='${fuel_id}';`;
con.query(query,(err,rows) => {
if (err) throw err;
res.send({message:'Success'}
);
});
});
module.exports = router;