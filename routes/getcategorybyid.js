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
let cat_id = req.body.id;
//console.log(districtid);
let query = `SELECT * FROM tbl_category c inner join tbl_service s on c.cat_id=s.cat_id where c.cat_id='${cat_id}' order by service_name ASC`;
console.log(query);
con.query(query,(err,rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });
    module.exports = router;
    