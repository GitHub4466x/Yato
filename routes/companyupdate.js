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
let company_id = req.body.company_id;
let company_name = req.body.company_name;
let logo = req.body.logo;
let Query=`select * from tbl_company where company_name='${company_name}'and  logo='${logo}'`
con.query(Query,(err,row)=>
{
    if(row.length > 0)
    {
        res.send({message:'exists'})
        return
    }
    else
    {
        let strquery = `UPDATE tbl_company SET company_name='${company_name}',logo='${logo}' WHERE company_id='${company_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    // if (err) throw err;
    res.send({ message: 'Success' })
    })

    }
})

});
module.exports = router;