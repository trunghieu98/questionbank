const express= require('express');
const router=express.Router();
const db=require('../controllers/teacher');
router.get('/',db.get_Teacher);
router.post('/',db.add_Teacher);
router.post('/:id',db.add_Teacher_ById);
router.post('/listtc/:id',db.get_Teacher_Listtc);
router.post('/update/teacher',db.update_Teacher_ById);

module.exports=router;