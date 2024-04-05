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
    let query = `INSERT INTO 
    tbl_company(company_name,logo) 
    VALUES (?,?);`;
    let company_name = req.body.companyname;
    let logo = req.body.logo;
    let Query = `select * from tbl_company where company_name='${company_name}'`;
    con.query(Query, (err, row) => {
        if (row.length > 0) {
            res.send({ message: 'exists' })
            return
        }
        else {
            con.query(query, [company_name, logo])
            console.log(query, [company_name, logo]);

            res.send({ message: 'Success' })

        }
    })



})
module.exports = router;