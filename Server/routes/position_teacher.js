const express = require("express");
const router = express.Router();
const db = require("../controllers/position_teacher");
//get list
router.get("/", db.get_List_Position_Teacher);
router.post("/", db.add_Position_Teacher);
// router.get("/:id", db.get_Grade_ById);
// 
// router.post("/update/",db.update_Grade);
// router.delete("/move/",db.delete_Grade);
module.exports = router;    