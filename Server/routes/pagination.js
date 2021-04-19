const express=require("express");
var router=express.Router();
var db=require('../controllers/pagination');
router.post("/",db.get_Pagination);
module.exports=router;