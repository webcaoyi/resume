const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/products",(req,res)=>{
    var sql="select * from h_laptop";
    pool.query(sql,(err,result)=>{
        if (err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})

module.exports=router;