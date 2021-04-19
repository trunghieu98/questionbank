const express = require("express");
const router = express.Router();
const db = require("../controllers/exam_subject");
//get list
router.get("/", db.get_List_Exam_Subject);
router.post("/", db.add_Exam_Subject);

// router.get("/:id", db.get_Grade_ById);

// router.post("/update/",db.update_Grade);
// router.delete("/move/",db.delete_Grade);
module.exports = router;    