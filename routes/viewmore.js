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
let request_id = req.body.request_id;
//console.log(districtid);
let query=` SELECT * FROM tbl_servicerequest r 
inner join tbl_customer c on c.login_id=r.login_id 
inner join tbl_servicecenter s on r.center_id=s.login_id  
inner join tbl_service sr on r.service_id=sr.service_id 
inner join tbl_vehicle v on c.login_id=v.login_id where r.request_id='${request_id}'  `

console.log(query);
con.query(query,(err,rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });
    module.exports = router;
    