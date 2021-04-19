const express = require("express");
const router = express.Router();
const db=require('../controllers/subject');
router.get('/',db.get_Subject);
router.post('/',db.add_Subject);
module.exports=router;