const express= require("express");
const router=express.Router();
const db=require('../controllers/student');
router.get('/',db.get_All_Student);
router.post('/',db.add_Student);
router.post('/:id',db.add_student_ById);
module.exports=router;
