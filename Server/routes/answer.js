const express = require("express");
const router = express.Router();
const db = require("../controllers/answer");
//get list
router.get("/", db.get_List_Answer);
router.post("/", db.add_Answer);
// router.get("/:id", db.get_Grade_ById);
// router.get("/", db.get_List_Grade);
// 
// router.post("/update/",db.update_Grade);
// router.delete("/move/",db.delete_Grade);
module.exports = router;    