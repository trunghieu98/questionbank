const express=require('express');
const router=express.Router();
const db=require('../controllers/grade_exam');
router.post('/',db.get_examdetails);
module.exports=router;