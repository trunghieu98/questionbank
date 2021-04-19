const express=require('express');
const router=express.Router();
const db=require('../controllers/grade_exam');
router.post('/',db.get_Grade_Exam);
router.post('/show',db.show_Grade_Exam);
router.post('/hienthi/baithi',db.hienthibaithi);
router.get('/hienthi/baithitoanbo',db.hienthibaithitoanbo);
router.post('/hienthi/luu',db.thembaithi);
module.exports=router;