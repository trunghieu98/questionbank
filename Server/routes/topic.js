const express = require("express");
const router = express.Router();
const db = require("../controllers/Topic");
//get list'
router.get("/", db.get_List_Topic);
router.post("/", db.add_Topic);
router.post("/:id", db.get_Topic_ByID);
// router.get("/:id", db.get_Topic_ById);
// 
// router.post("/update/",db.update_Topic);
// router.delete("/move/",db.delete_Topic);
module.exports = router;    