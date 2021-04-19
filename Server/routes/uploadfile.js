const express=require("express");
const router=express.Router()
const db=require('../controllers/uploadfile');
router.get("/",db.add_Upload);
module.exports=router;
