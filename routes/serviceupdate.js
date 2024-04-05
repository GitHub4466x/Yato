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
let service_id = req.body.service_id;
let cat_id = req.body.cat_id;
let service_name = req.body.service_name;
let service_img=req.body.service_img;

let Query=`select * from tbl_service where cat_id='${cat_id}' and service_name='${service_name}' and service_img='${service_img}'`;
    con.query(Query,(err,row)=>
    {
        if(row.length >0)
        {
            res.send({message:'exists'})
            return
        }
        else{
            let strquery = `UPDATE tbl_service SET  service_name='${service_name}',cat_id='${cat_id}' , service_img='${service_img}' where service_id='${service_id}'`;
            console.log(strquery)
            con.query(strquery, (err, rows) => {
            if (err) throw err;
            res.send({message:'Success'})
            });
        }
    })


});
module.exports = router;
