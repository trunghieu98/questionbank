const express = require('express');
const router = express.Router();
const db= require('../controllers/class');

router.get("/",db.get_List_Class);
// route.get("/:id",db.get_Class_ById);
router.post('/',db.add_Class);
module.exports= router;