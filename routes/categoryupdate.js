var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_servicehub"
});
router.post('/', (req, res, next) => {
let cat_id = req.body.cat_id;
let cat_name = req.body.cat_name;
let cat_discription = req.body.cat_discription;
let query=`select * from tbl_category where cat_name='${cat_name}'`;
    con.query(query,(err,row)=>{
        if(row.length >0)
        {
            res.send({message:'exists'});
            return
        }
        else{
            let strquery = `UPDATE tbl_category SET cat_name='${cat_name}',cat_discription='${cat_discription}' WHERE cat_id='${cat_id}'`;
console.log(strquery)
con.query(strquery, (err, rows) => {
// if (err) throw err;
res.send({ message: 'Success' })
})
        }
    });

});
module.exports = router;