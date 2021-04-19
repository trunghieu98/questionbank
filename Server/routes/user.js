const express=require("express");
const router=express.Router();
const db= require('../controllers/user');
router.post('/login',db.get_UserByid);
router.post('/login/teacher',db.get_TeacherByid);

module.exports=router;
