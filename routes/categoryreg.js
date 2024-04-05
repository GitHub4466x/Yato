var mysql=require('mysql');
var express = require('express');
var router = express.Router();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_servicehub"
});


router.post('/', (req, res, next)=> {
    let cat_name = req.body.cat_name;
    let cat_discription= req.body.cat_discription; 
    let query=`select * from tbl_category where cat_name='${cat_name}'`;
    con.query(query,(err,row)=>{
        if(row.length >0)
        {
            res.send({message:'exists'});
            return
        }
        else{
            let strquery = `INSERT INTO tbl_category (cat_name,cat_discription) VALUES(?,?);`; 
            con.query(strquery, [cat_name,cat_discription]) 
           res.send({ message: 'Success' })
        }
    }) 
     
     
     // console.log("1 record inserted");
     }); 
    module.exports = router; 