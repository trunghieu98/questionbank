const express = require("express");
const router = express.Router();
const db = require("../controllers/Test_Quesstion");
//get list
router.get("/", db.get_List_Test_Quesstion);
// router.get("/:id", db.get_Test_Quesstion_ById);
// router.post("/", db.add_Test_Quesstion);
// router.post("/update/",db.update_Test_Quesstion);
// router.delete("/move/",db.delete_Test_Quesstion);
module.exports = router;    