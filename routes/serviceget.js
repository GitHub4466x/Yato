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
let service_id = req.body.id;
let query = `SELECT * FROM tbl_service where service_id ='${service_id}'`;
console.log(query);
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
});
});
/* GET users listing. */
module.exports = router;
